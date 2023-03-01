import productsFromFile from "../../data/products.json";
import Button from 'react-bootstrap/Button';
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedProductRef = useRef();

                      //  79966360
  const deleteProduct = (productId) => {
    const index = productsFromFile.findIndex(element => element.id === productId);
    productsFromFile.splice(index,1);
    setProducts(productsFromFile.slice());
  }

  const searchFromProducts = () => {
    const found = productsFromFile.filter( element => 
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