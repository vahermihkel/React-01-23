import { useParams } from "react-router-dom";
import config from "../data/config.json";
import { useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap';

function SingleProduct() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const productFound = products.find((element) => element.id === Number(id));
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productDbUrl)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json || []);
        setLoading(false);
      });
  }, []);

  if (isLoading === true) {
    return <Spinner />
  }

  return (
    <div>
      {productFound !== undefined && (
        <div>
          <div> {productFound.id} </div>
          <div> {productFound.name} </div>
          <img src={productFound.image} alt="" />
          <div> {productFound.price} </div>
          <div> {productFound.description} </div>
        </div>
      )}
      {productFound === undefined && <div>Product not found!</div>}
    </div>
  );
}

export default SingleProduct;
