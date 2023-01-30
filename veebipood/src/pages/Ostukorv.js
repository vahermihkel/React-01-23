import { useState } from "react"
import { Link } from "react-router-dom"

function Ostukorv() {     // array, list, massiiv
  const [ostukorv, uuendaOstukorv] = useState(["Coca", "Fanta", "Sprite", "Vichy"]);

  // Tühjendamine - uuendaOstukorv([]);

  // Ühe kustutamine - splice
  const kustuta = (i) => {
    ostukorv.splice(i,1); // splice ---> mitmendat, mitu tk
    uuendaOstukorv(ostukorv.slice());
  }

  // Ühe lisamine ---> lõppu juurde ehk push
  const lisa = (klikitudToode) => {
    ostukorv.push(klikitudToode);
    uuendaOstukorv(ostukorv.slice());
  }

  return (
    <div>
      {ostukorv.length > 0 && <button onClick={() => uuendaOstukorv([])}>Tühjenda</button>}
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