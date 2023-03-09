import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import config from "../../data/config.json";
import { Spinner } from 'react-bootstrap';

function MaintainProducts() {
  const searchedProductRef = useRef();
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || [])
        setDbProducts(json || []);
        setLoading(false);
      })
  }, []);

  const deleteProduct = (productId) => {
    const index = dbProducts.findIndex(element => element.id === productId);
    dbProducts.splice(index,1);
    fetch(config.productDbUrl , {"method": "PUT", "body": JSON.stringify(dbProducts)})
      .then(() => searchFromProducts());
  }

  const searchFromProducts = () => {
    const found = dbProducts.filter( element => 
      element.name.toLowerCase().includes(searchedProductRef.current.value.toLowerCase()) );
    setProducts(found);
  }

  if (isLoading === true) {
    return <Spinner />
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