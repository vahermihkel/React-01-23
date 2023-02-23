import productsFromFile from "../data/products.json";
import Button from '@mui/material/Button';
import { useState } from "react";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
  
  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(productClicked);
    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  const sortAZ = () => {
    products.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {} // KODUS

  const sortPriceAsc = () => {} // KODUS

  const sortPriceDesc = () => {} // KODUS

  const filterByCategory = (categoryClicked) => {
    const result = productsFromFile.filter(element => element.category === categoryClicked);
    setProducts(result);
  }

  return (
    <div>
      <button onClick={() => filterByCategory("guitar")}>guitar</button>
      <button onClick={() => filterByCategory("drum")}>drum</button>
      <br />
      <div>{products.length} products shown</div>
      <br />
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAsc}>Sort price asc</button>
      <button onClick={sortPriceDesc}>Sort price desc</button>
      {products.map(product => 
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <Button variant="contained" onClick={() => addToCart(product)}>Lisa ostukorvi</Button>
        </div> )}
    </div>
  )
}

export default HomePage