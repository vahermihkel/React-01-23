import { createContext, useState } from "react";

const CartSumContext = createContext(null);

export const CartSumContextProvider = (props) => {
  const [cartSum, setCartSum] = useState(calculateSumOfCart());

  // Cart.js failist
  function calculateSumOfCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // HomePage.js seest addToCart kõige ülemine rida
    let totalsum = 0;
    cart.forEach(element => totalsum = totalsum + element.product.price * element.quantity);
    return totalsum.toFixed(2);
  }

  return (
    <CartSumContext.Provider value={{
      cartSum: cartSum,
      setCartSum: setCartSum
    }}>
      {props.children}
    </CartSumContext.Provider>
  )
}

export default CartSumContext;