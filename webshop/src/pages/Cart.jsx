import React, { useState } from 'react'

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

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

  // [{product: {id: "1", name:"", price:""}, quantity: 2}, {product: {id: "2", name:"", price:""}, quantity: 1}]
  return (
    <div>
      {cart.length > 0 && <button onClick={emptyCart}>Empty cart</button>} <br /><br />
      {cart.length > 0 && <div>Cart total is : {calculateSumOfCart()} €</div>} <br /> 
      {cart.length === 1 && <div>There is one item in the cart - {calculateItems()} tk</div>}
      {cart.length >= 2 && <div>There is {cart.length} items in the cart - {calculateItems()} tk</div>}
      {cart.length === 0 && <div>The cart is empty</div>}
      <div>
        {cart.map((element, index) =>
         <div className="product" key={index}>
          <img className="picture" src={element.product.image} alt="" />
          <div className="name">{element.product.name}</div>
          <div className="price">{element.product.price} €</div>
          <button className="button" onClick={() => decreaseQuantity(index)}>-</button>
          <div className="quantity">{element.quantity} tk</div>
          <button className="button" onClick={() => increaseQuantity(index)}>+</button>
          <div className="total">{element.product.price * element.quantity} €</div>
          <button className="button" onClick={() => deleteFromCart(index)}>x</button>
        </div>)}
      </div>
    </div>
  )
}

export default Cart