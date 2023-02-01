import { useState } from "react"
import { Link } from "react-router-dom"

function Ostukorv() {     // array, list, massiiv    "["Coca", "Fanta"]"             sulg lilla viimane - useState kinniminek
                                                                       // sulg sinine eelviimane - jutumärkide mahavõtmine
     // ["Coca", "Fanta"]                                             // kollane - localStorage'i võti
  const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);

  const tyhjenda = () => {
    uuendaOstukorv([]);
    localStorage.setItem("ostukorv", JSON.stringify([])); // [] - tühi array
  }

              //   1
  const kustuta = (i) => {
    // ["Coca"]
    ostukorv.splice(i,1); // splice ---> mitmendat, mitu tk
    uuendaOstukorv(ostukorv.slice());
                                    // "["Coca"]"
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  }


  // Ühe lisamine ---> lõppu juurde ehk push
  const lisa = (klikitudToode) => {
    ostukorv.push(klikitudToode);
    uuendaOstukorv(ostukorv.slice());
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  }

  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.length === 1 && <div>Ostukorvis on 1 ese</div>}
      {ostukorv.length > 1 && <div>Ostukorvis on {ostukorv.length} eset</div>}
      {ostukorv.map((e,i) => 
        <div key={i}>
          {e} 
          <button onClick={() => kustuta(i)}>x</button> 
          <button onClick={() => lisa(e)}>+</button> 
        </div>)}
      {ostukorv.length === 0 && 
        <div>
          Ostukorv on tühi. 
          <Link to="/">Avaleht</Link>
        </div>}
    </div>
  )
}

export default Ostukorv