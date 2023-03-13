import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import "../css/Cart.css";
import CartSumContext from '../store/CartSumContext';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [parcelmachines, setParcelmachines] = useState([]);  // useState({})    useState("")    useState(false)
  const cartSumCtx = useContext(CartSumContext);

  // uef   Reacti erikood:    useState    useRef    useEffect    useTranslate    useParams   useMap   useNavigate
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelmachines(json.filter(pm => pm.A0_NAME === "EE")));
  }, []);

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    cartSumCtx.setCartSum(0);
  }

  const deleteFromCart = (lineNumber) => {
    cart.splice(lineNumber,1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    cartSumCtx.setCartSum(calculateSumOfCart());
  }

  const calculateSumOfCart = () => {
    let totalsum = 0;
    cart.forEach(element => totalsum = totalsum + element.product.price * element.quantity);
    return totalsum.toFixed(2);
  }

  const calculateItems = () => {
    let totalitems = 0;
    cart.forEach(element => totalitems = totalitems + element.quantity);
    return totalitems;
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      deleteFromCart(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    cartSumCtx.setCartSum(calculateSumOfCart());
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    cartSumCtx.setCartSum(calculateSumOfCart());
  }

  const pay = () => {

    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    
    const headers = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    }; // metaandmed (mis kujul tuleb body + sisselogimise tunnused)

    const body = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": calculateSumOfCart(),
      "order_reference": Math.floor(Math.random()*999999),
      "nonce": "dasdsadas" + Math.floor(Math.random()*999999) + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://webshop-01-2023.web.app" // firebase.json failist site: "" jutumärkide sees
      }; // andmed mille alusel uut makset salvestada

    emptyCart();

    fetch(url,{"method": "POST", "body": JSON.stringify(body), "headers": headers})
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link);
      // window.location.href --> vahetab aadressi (välise lingi vastu)
      // <Link> --> tegime HTMLst ümbersuunamise (see töötab alati)
      // useNavigate  navigate --> JS-st ümbersuunamine (kui enne tehakse mingi koodiblokk)
  }
 
  return (
    <div>
      <div className="cart-top">
        {cart.length > 0 && <Button onClick={emptyCart}>Empty cart</Button>} <br /><br />
        {cart.length > 0 && <div>Cart total is : {calculateSumOfCart()} €</div>} <br /> 
        {cart.length === 1 && <div>There is one item in the cart - {calculateItems()} tk</div>}
        {cart.length >= 2 && <div>There is {cart.length} items in the cart - {calculateItems()} tk</div>}
        {cart.length === 0 && <div>The cart is empty</div>}
        {cart.length > 0 && <select>
          {parcelmachines.map(pm => <option key={pm.NAME}>{pm.NAME}</option>) }
        </select>}
        {cart.length > 0 && <Button onClick={pay}>Maksma</Button>}
      </div>
      <div>
        {cart.map((element, index) =>
         <div className="product" key={index}>
          <img className="picture" src={element.product.image} alt="" />
          <div className="name">{element.product.name}</div>
          <div className="price">{element.product.price} €</div>
          <div className="quantity">
            <img src="/minus.png" alt="" className="button" onClick={() => decreaseQuantity(index)} />
            <div>{element.quantity} tk</div>
            <img src="/add.png" alt="" className="button" onClick={() => increaseQuantity(index)} />
          </div>
          <div className="total">{(element.product.price * element.quantity).toFixed(2)} €</div>
          <img src="/remove.png" alt="" className="button" onClick={() => deleteFromCart(index)} />
        </div>)}
      </div>
    </div>
  )
}

export default Cart