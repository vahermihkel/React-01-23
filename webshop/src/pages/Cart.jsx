import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "../css/Cart.css";

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [parcelmachines, setParcelmachines] = useState([]);  // useState({})    useState("")    useState(false)

  // uef   Reacti erikood:    useState    useRef    useEffect    useTranslate    useParams   useMap   useNavigate
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelmachines(json.filter(pm => pm.A0_NAME === "EE")));
  }, []);

  // useEffect(() => {
  //   fetch("https://www.omniva.ee/locations.json")
  //     .then(res => res.json())
  //     .then(json => setParcelmachines(json));
  // }, []);

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const deleteFromCart = (lineNumber) => {
    cart.splice(lineNumber,1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart))
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
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // result.data.ee.map()
  // [{product: {id: "1", name:"", price:""}, quantity: 2}, {product: {id: "2", name:"", price:""}, quantity: 1}]
  return (
    <div>
      <div className="cart-top">
        {cart.length > 0 && <Button onClick={emptyCart}>Empty cart</Button>} <br /><br />
        {cart.length > 0 && <div>Cart total is : {calculateSumOfCart()} €</div>} <br /> 
        {cart.length === 1 && <div>There is one item in the cart - {calculateItems()} tk</div>}
        {cart.length >= 2 && <div>There is {cart.length} items in the cart - {calculateItems()} tk</div>}
        {cart.length === 0 && <div>The cart is empty</div>}
        <select>
          {parcelmachines.map(pm => <option key={pm.NAME}>{pm.NAME}</option>) }
        </select>
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