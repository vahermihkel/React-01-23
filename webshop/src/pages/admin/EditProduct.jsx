import { useParams, useNavigate } from "react-router-dom";
import { useRef } from 'react'
import productsFromFile from "../../data/products.json";

function EditProduct() {
  const { id } = useParams();
  const productFound = productsFromFile.find(element => element.id === Number(id));
  const index = productsFromFile.indexOf(productFound); 
  // findIndex kasutame järjekorranumbri otsimiseks objektide osas
  // indexOf kasutame järjekorranumbri leidmiseks primitiivide puhul (string, number, boolean)
  // indexOf on lihtsam ja kui me otsime just leitud toote järjekorranumbrit, siis saame seda kasutada
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();

  const changeProduct = () => {
    const newProduct = {
      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked
    }
    // ["Nobe", "Tesla", "BMW"][0] = "Audi";
    // ["Audi", "Tesla", "BMW"]
    productsFromFile[index] = newProduct;
    navigate("/admin/maintain-products");
  }

  return (
    <div>
      {productFound !== undefined && <div>
        <label>ID</label> <br />
        <input ref={idRef} type="number" defaultValue={productFound.id} /> <br />
        <label>Name</label> <br />
        <input ref={nameRef} type="text" defaultValue={productFound.name} /> <br />
        <label>Price</label> <br />
        <input ref={priceRef} type="number" defaultValue={productFound.price} /> <br />
        <label>Image</label> <br />
        <input ref={imageRef} type="text" defaultValue={productFound.image} /> <br />
        <label>Category</label> <br />
        <input ref={categoryRef} type="text" defaultValue={productFound.category} /> <br />
        <label>Description</label> <br />
        <input ref={descriptionRef} type="text" defaultValue={productFound.description} /> <br />
        <label>Active</label> <br />
        <input ref={activeRef} type="checkbox" defaultChecked={productFound.active} /> <br />
        <button onClick={changeProduct}>Change</button>
      </div>}
      {productFound === undefined && <div>Product not found!</div> }
    </div>
  )
}

export default EditProduct

// 1. Muudan URLi vastuvõtlikkuse muutuja osas+
// 2. Võimaldan kuskilt lehelt sinna URL-le sattuda, saates kaasa selle muutuja+
// 3. Võtame useParams abil muutuja kasutusele (useParams osas import!)+
// 4. Otsime sobiva toote üles (tooted on käes, ID on käes, ketrame kõiki tooteid kuni ID-d matchivad)+
// 5. Teeme 7x label + input
// 6. Teeme 7x useRef (useRef osas import)
// 7. 7x defaultValue={productFound.OMADUS}
// 8. Teeme nupu ja seome funktsiooniga
// 9. Funktsiooni sees konstrueerime objekti kokku const newProduct = {1ref,2ref,3ref,}
// 10. Leiame üles järjekorranumbri
// 11. Funktsiooni sees teeme asenduse:    productFound[jrkNr] = newProduct
// 12. Tagasisuunamise toodete haldamise lehele