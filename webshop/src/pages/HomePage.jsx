// import productsFromFile from "../data/products.json";
import Button from '@mui/material/Button';
// import categoriesFromFile from "../data/categories.json";

import config from "../data/config.json";
import { useEffect, useState } from "react";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.categoryDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))

    fetch(config.productDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || [])
        setDbProducts(json || []);
      })
  }, []);
  // uef --> Simple React Snippets
  // kui võetakse andmebaasist, siis see tähendab teist välist rakendust (Firebase, Amazon, Microsoft, MongoDB, MySQL, Oracle, PostgreSQL)
  // välisest rakendusest võtmine võtab alati aega (100ms - 500ms)
  // useState sisse tuleb kirjutada algväärtuseks see väärtus mis on senikaua kuni võetakse
  // React ei jää veerand sekundiks seisma (1ms-5ms)


  // [{id: "1", name:"", price:""} 2, {id: "2", name:"", price:""} 1]
  // [{id: "1", name:"", price:""}, {id: "1", name:"", price:""}, {id: "2", name:"", price:""}]
  // [{toode: {id: "1", name:"", price:""}, kogus: 2}, {toode: {id: "2", name:"", price:""}, kogus: 1}]
  // [{product: {id: "1", name:"", price:""}, quantity: 2}, {product: {id: "2", name:"", price:""}, quantity: 1}]
  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
                                                  // 3131231231
    const index = cartLS.findIndex(el => el.product.id === productClicked.id)
    if (index >= 0) {
      // muutmised (ja kustutamised) toimivad ainult järjekorranumbriga
      // suurendan kogust 1 võrra
      cartLS[index].quantity = cartLS[index].quantity + 1;
      // uuendaKogus(kogus + 1)
    } else {
      cartLS.push({product: productClicked, quantity: 1});
    }

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

  return (
    <div>
      {/* <button onClick={() => filterByCategory("guitar")}>guitar</button>
      <button onClick={() => filterByCategory("drum")}>drum</button> */}
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
          <img src={product.image} alt="" />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <Button variant="contained" onClick={() => addToCart(product)}>Lisa ostukorvi</Button>
        </div> )}
    </div>
  )
}

export default HomePage