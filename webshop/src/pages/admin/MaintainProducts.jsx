// import productsFromFile from "../../data/products.json";
import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import config from "../../data/config.json";

function MaintainProducts() {
  // const [products, setProducts] = useState(productsFromFile);
  const searchedProductRef = useRef();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(config.productDbUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []))
  }, []);

                      //  79966360
  const deleteProduct = (productId) => {
    const index = products.findIndex(element => element.id === productId);
    products.splice(index,1);
    setProducts(products.slice());
    // PEAB OLEMA ANDMEBAASIST KUSTUTAMINE
  }

  const searchFromProducts = () => {
    const found = products.filter( element => 
      element.name.toLowerCase().includes(searchedProductRef.current.value.toLowerCase()) );
    setProducts(found);
    // FILTER VÄHENDAB EELMIST FILTERDAMIST
    // yksPood.endsWith("e")
    // yksPood.length === 8
  }

  return (
    <div>
      <input ref={searchedProductRef} onChange={searchFromProducts} type="text" />
      <div>{products.length} tk</div>
      {products.map(product => 
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div>{product.category}</div>
          <Button as={Link} to={"/admin/edit-product/" + product.id} variant="warning">Muuda</Button>
          <Button variant="danger" onClick={() => deleteProduct(product.id)}>Kustuta</Button>
        </div> )}
    </div>
  )
}

export default MaintainProducts