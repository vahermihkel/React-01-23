import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom"

function MuudaToode() {
  // muuda-toode/:jrkNr        http://localhost:3000/muuda-toode/2
  const { jrkNr } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[jrkNr];
  const nimiRef = useRef();   // telefonViide, emailViide, inputiLuger, nameRef
  const hindRef = useRef(); // numbriline
  const piltRef = useRef(); // sõnaline
  const aktiivneRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    // ["Nobe", "Audi", "Tesla"][1] = "BMW"
    // localStorage[useParams] = inputist 
    tooted[jrkNr] = {
      "nimi": nimiRef.current.value,
      "hind": Number(hindRef.current.value),
      "pilt": piltRef.current.value,
      "aktiivne": aktiivneRef.current.checked,
    };
    localStorage.setItem("tooted", JSON.stringify(tooted));
    navigate("/halda-tooteid");
  }

  return (
    <div>
      <label>Uue toote nimi</label> <br />
      <input ref={nimiRef} defaultValue={leitudToode.nimi} type="text" /> <br />
      <label>Uue toote hind</label> <br />
      <input ref={hindRef} defaultValue={leitudToode.hind} type="number" /> <br />
      <label>Uue toote pilt</label> <br />
      <input ref={piltRef} defaultValue={leitudToode.pilt} type="text" /> <br />
      <label>Uue toote aktiivsus</label> <br />
      <input ref={aktiivneRef} defaultChecked={leitudToode.aktiivne} type="checkbox" /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode