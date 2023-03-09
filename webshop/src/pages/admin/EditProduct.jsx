import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react"
import config from "../../data/config.json";
import { Alert } from "@mui/material";
import { Spinner } from 'react-bootstrap';

function EditProduct() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const productFound = products.find(element => element.id === Number(id));
  const index = products.indexOf(productFound); 
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch(config.categoryDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))

    fetch(config.productDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setLoading(false);
      })
  }, []);

  const changeProduct = () => {
    if (idRef.current.value === "") {
      setMessage("Need an ID!");
      return; 
    } 
    if (nameRef.current.value === "") {
      setMessage("Need a name!");
      return;
    }
    if (nameRef.current.value.charAt(0).toLowerCase() === nameRef.current.value.charAt(0)) {
      setMessage("Name must start with capital letter!");
      return;
    } 
    if (/^[A-Z]+[a-zA-Z0-9ÜÕÖÄüõöä]*$/.test(nameRef.current.value) === false) {
      setMessage("Name must start with capital letter!");
      return; 
    } 
    if (priceRef.current.value === "") {
      setMessage("Need a price!");
      return; 
    } 
    if (/^\S*$/.test(imageRef.current.value) === false) {
      setMessage("Image URL must not have space in it!");
      return;
    } 
    const newProduct = {
      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked
    }
    products[index] = newProduct;
    fetch(config.productDbUrl , {"method": "PUT", "body": JSON.stringify(products)})
      .then(() => navigate("/admin/maintain-products"));
  }

  const [isError, setError] = useState(false);

  const checkIdUniqueness = () => {
    const found = products.find(element => element.id === Number(idRef.current.value));
    if (found === undefined) { 
      setError(false);
    } else {
      setError(true);
    }
  }

  if (isLoading === true) {
    return <Spinner />
  }

  return (
    <div>
      <div>{message}</div>
      {isError === true && <Alert severity="error">Sisestatud ID on juba olemas!</Alert>}
      {productFound !== undefined && <div>
        <label>ID</label> <br />
        <input ref={idRef} onChange={checkIdUniqueness} type="number" defaultValue={productFound.id} /> <br />
        <label>Name</label> <br />
        <input ref={nameRef} type="text" defaultValue={productFound.name} /> <br />
        <label>Price</label> <br />
        <input ref={priceRef} type="number" defaultValue={productFound.price} /> <br />
        <label>Image</label> <br />
        <input ref={imageRef} type="text" defaultValue={productFound.image} /> <br />
        <label>Category</label> <br />
        <select ref={categoryRef}>
          {categories.map(element => <option key={element.name}>{element.name}</option> )}
        </select> <br />
        <label>Description</label> <br />
        <input ref={descriptionRef} type="text" defaultValue={productFound.description} /> <br />
        <label>Active</label> <br />
        <input ref={activeRef} type="checkbox" defaultChecked={productFound.active} /> <br />
        <button onClick={changeProduct} disabled={isError === true}>Change</button>
      </div>}
      {productFound === undefined && <div>Product not found!</div> }
    </div>
  )
}

export default EditProduct