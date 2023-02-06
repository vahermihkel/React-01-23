import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom"

function MuudaToode() {
  // muuda-toode/:jrkNr        http://localhost:3000/muuda-toode/2
  const { jrkNr } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[jrkNr];
  const nimiRef = useRef();   // telefonViide, emailViide, inputiLuger, nameRef
  const navigate = useNavigate();

  const muuda = () => {
    // ["Nobe", "Audi", "Tesla"][1] = "BMW"
    // localStorage[useParams] = inputist 
    tooted[jrkNr] = nimiRef.current.value;
    localStorage.setItem("tooted", JSON.stringify(tooted));
    navigate("/halda-tooteid");
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} defaultValue={leitudToode} type="text" /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode