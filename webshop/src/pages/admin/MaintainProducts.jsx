// import productsFromFile from "../../data/products.json";
import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import config from "../../data/config.json";

function MaintainProducts() {
  // const [products, setProducts] = useState(productsFromFile);
  const searchedProductRef = useRef();
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);

  // navigate("/admin/maintain-products");
  useEffect(() => {
    fetch(config.productDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || [])
        setDbProducts(json || []);
      })
  }, []);

                      //  79966360
  const deleteProduct = (productId) => {
    const index = dbProducts.findIndex(element => element.id === productId);
    dbProducts.splice(index,1);
    fetch(config.productDbUrl , {"method": "PUT", "body": JSON.stringify(dbProducts)})
      .then(() => searchFromProducts());
  }

  const searchFromProducts = () => {
    // andmebaasipäringut ei tee
    const found = dbProducts.filter( element => 
      element.name.toLowerCase().includes(searchedProductRef.current.value.toLowerCase()) );
    setProducts(found);
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