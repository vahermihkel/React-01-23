import Button from '@mui/material/Button';
import config from "../data/config.json";
import { useContext, useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartSumContext from "../store/CartSumContext";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const cartSumCtx = useContext(CartSumContext);

  useEffect(() => {
    fetch(config.categoryDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))

    fetch(config.productDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || [])
        setDbProducts(json || []);
        setLoading(false);
      })
  }, []);
 
  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
                                                  // 3131231231
    const index = cartLS.findIndex(el => el.product.id === productClicked.id)
    if (index >= 0) {
      cartLS[index].quantity = cartLS[index].quantity + 1;
    } else {
      cartLS.push({product: productClicked, quantity: 1});
    }

    let totalsum = 0;
    cartLS.forEach(element => totalsum = totalsum + element.product.price * element.quantity);

    cartSumCtx.setCartSum(totalsum.toFixed(2));

    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  const sortAZ = () => {
    products.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const sortPriceAsc = () => {
    products.sort((a,b) => a.price - b.price);
    setProducts(products.slice());
  } 

  const sortPriceDesc = () => {
    products.sort((a,b) => b.price - a.price);
    setProducts(products.slice());
  } 

  const filterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(element => element.category === categoryClicked);
    setProducts(result);
  }

  if (isLoading === true) {
      return <Spinner />
  }

  return (
    <div>
      {categories.map(element => 
        <button key={element.name} onClick={() => filterByCategory(element.name)}>{element.name}</button>)}
      <br />
      <div>{products.length} products shown</div>
      <br />
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAsc}>Sort price asc</button>
      <button onClick={sortPriceDesc}>Sort price desc</button>
      {products.map(product => 
        <div key={product.id}>
          <Link to={"/product/" + product.id}>
            <img src={product.image} alt="" />
            <div>{product.name}</div>
            <div>{product.price}</div>
          </Link>
          <Button variant="contained" onClick={() => addToCart(product)}>Lisa ostukorvi</Button>
        </div> )}
    </div>
  )
}

export default HomePage