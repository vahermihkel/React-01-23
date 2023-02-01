import { useState } from "react"

function Meist() {
  const [näitaEmaili, uuendaNäitaEmaili] = useState(false);
  const [telefon, uuendaTelefoni] = useState(localStorage.getItem("telefon"));
  const [aadress, uuendaAadressi] = useState(localStorage.getItem("aadress"));

  return (
    <div>
      <div>Meie email: 
        {näitaEmaili === false && <button onClick={() => uuendaNäitaEmaili(true)}>Näita e-maili</button>}
        {näitaEmaili === true && localStorage.getItem("email")}
      </div>
      <div>Meie telefon: 
    {/* <button onClick={() => suurenda(kogus + 1)}>Suurenda kogust</button> */}
        { telefon.startsWith("+372") === false && <button onClick={() => uuendaTelefoni("+372" + telefon)}>Lisa telefonile +372 ette</button>}
        {telefon}
        </div>
      <div className={aadress.charAt(0) === aadress.charAt(0).toLowerCase() ? "yellow" : "blue"}>Meie aadress:
        {aadress}
      </div>
      <button onClick={() => uuendaAadressi(aadress.toUpperCase())}>Kõik aadressil suurteks tähtedeks</button>
      <button onClick={() => uuendaAadressi(aadress.toLowerCase())}>Kõik aadressil väikesteks tähtedeks</button>
    </div>
  )
}

export default Meist