import productsFromFile from "../data/products.json";
import Button from '@mui/material/Button';
import { useState } from "react";
import categoriesFromFile from "../data/categories.json";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
  
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

  const sortZA = () => {} // KODUS

  const sortPriceAsc = () => {} // KODUS

  const sortPriceDesc = () => {} // KODUS

  const filterByCategory = (categoryClicked) => {
    const result = productsFromFile.filter(element => element.category === categoryClicked);
    setProducts(result);
  }

  return (
    <div>
      {/* <button onClick={() => filterByCategory("guitar")}>guitar</button>
      <button onClick={() => filterByCategory("drum")}>drum</button> */}
      {categoriesFromFile.map(element => 
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