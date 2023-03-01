import { useRef, useState } from "react"
import productsFromFile from "../../data/products.json"; // 0.

function AddProduct() {
  const [message, setMessage] = useState();
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  const add = () => {
    if (nameRef.current.value === "") {
      setMessage("Need a name!");
    } else {
      setMessage("Product added:" +  nameRef.current.value);

      //1. const products = JSON.parse(localStorage.getItem("products")) || [];

      const addProduct = {
        "id": Number(idRef.current.value),
        "name": nameRef.current.value,
        "price": Number(priceRef.current.value),
        "image": imageRef.current.value,
        "category": categoryRef.current.value,
        "description": descriptionRef.current.value,
        "active": activeRef.current.checked
      }

      // 2.
      productsFromFile.push(addProduct);

      // 3. localStorage.setItem("products", JSON.stringify(products));
      nameRef.current.value = "";
    }
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
        <input ref={categoryRef} type="text" /> <br />
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