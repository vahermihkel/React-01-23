import { useEffect, useRef, useState } from "react"
import config from "../../data/config.json";

function AddProduct() {
  const [message, setMessage] = useState();
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.categoryDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))

    fetch(config.productDbUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []))
  }, []);

  const add = () => {
    if (idRef.current.value === "") {
      setMessage("Need an ID!");
      return; // return lõpetab funktsiooni
    } 
    if (nameRef.current.value === "") {
      setMessage("Need a name!");
      return; // return lõpetab funktsiooni
    }
    if (nameRef.current.value.charAt(0).toLowerCase() === nameRef.current.value.charAt(0)) {
      setMessage("Name must start with capital letter!");
      return; // return lõpetab funktsiooni
    } 
    // regex on otsingumuster   regular expression    regulaaravaldis (guugeldatakse)
    if (/^[A-Z]+[a-zA-Z]*$/.test(nameRef.current.value) === false) {
      setMessage("Name must start with capital letter!");
      return; // return lõpetab funktsiooni
    } 
    if (priceRef.current.value === "") {
      setMessage("Need a price!");
      return; // return lõpetab funktsiooni
    } 
    if (/^\S*$/.test(imageRef.current.value) === false) {
      setMessage("Image URL must not have space in it!");
      return; // return lõpetab funktsiooni
    } 
    // else {
      setMessage("Product added:" +  nameRef.current.value);
      const addProduct = {
        "id": Number(idRef.current.value),
        "name": nameRef.current.value,
        "price": Number(priceRef.current.value),
        "image": imageRef.current.value,
        "category": categoryRef.current.value,
        "description": descriptionRef.current.value,
        "active": activeRef.current.checked
      }

      products.push(addProduct);
      fetch(config.productDbUrl , {"method": "PUT", "body": JSON.stringify(products)});
      idRef.current.value = "";
      nameRef.current.value = "";
      priceRef.current.value = "";
      imageRef.current.value = "";
      categoryRef.current.value = "";
      descriptionRef.current.value = "";
      activeRef.current.checked = false;
    // }

  }

  return (
    <div>
      <div>
        <label>ID</label>
        <input ref={idRef} type="number" /> <br />
        <label>Name</label>
        <input ref={nameRef} type="text" /> <br />
        <label>Price</label>
        <input ref={priceRef} type="number" /> <br />
        <label>Image</label>
        <input ref={imageRef} type="text" /> <br />
        <label>Category</label>
        <select ref={categoryRef}>
          {categories.map(element => <option key={element.name}>{element.name}</option> )}
        </select> <br />
        <label>Description</label>
        <input ref={descriptionRef} type="text" /> <br />
        <label>Active</label>
        <input ref={activeRef} type="checkbox" /> <br />
        <button onClick={add}>Add product</button><br />
        <div>{message}</div>
      </div>
    </div>
  )
}

export default AddProduct