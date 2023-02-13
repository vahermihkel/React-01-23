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

  const arvutaKogusumma = () => {
    // [{n: "Coca", h: 7}, {n: "Fanta", h: 2}, {n: "Sprite", h: 5}]
    //    (0, {n: "Coca", h: 7}) => 0 + 7  ===> 7
    //    (7, {n: "Fanta", h: 2}) => 7 + 2  ===> 9
    //    (9, {n: "Sprite", h: 5}) => 9 + 5  ===> 14
    return ostukorv.reduce((summa,ostukorviToode) => summa + ostukorviToode.hind, 0);
  }

  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.length === 1 && <div>Ostukorvis on 1 ese</div>}
      {ostukorv.length > 1 && <div>Ostukorvis on {ostukorv.length} eset</div>}
      {ostukorv.map((e,i) => 
        <div key={i}>
          <div>{e.nimi}</div>
          <div>{e.pilt}</div>
          <div>{e.hind}</div>
          <div>{e.aktiivne}</div>
          <button onClick={() => kustuta(i)}>x</button> 
          <button onClick={() => lisa(e)}>+</button> 
        </div>)}
      <div>Kokku: {arvutaKogusumma()}</div>
      {ostukorv.length === 0 && 
        <div>
          Ostukorv on tühi. 
          <Link to="/">Avaleht</Link>
        </div>}
    </div>
  )
}

export default Ostukorv