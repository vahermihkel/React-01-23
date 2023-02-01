import { useState } from "react"

function Tooted() {
  const [tooted, uuendaTooted] = useState(["Google P2", "P5", "T1", "RS7"]);

  const lisaOstukorvi = (klikitudToode) => {
    // localStorage.getItem()
    // ["Coca", "Fanta"].push("Google P23")
    // localStorage.setItem()

    // const ostukorv = JSON.parse(localStorage.getItem("ostukorv") || "[]");
    const ostukorv = JSON.parse(localStorage.getItem("ostukorv")) || [];
    ostukorv.push(klikitudToode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));

    // 1. võtame localStorage-st "["Coca", "Fanta"]" 
    // 2. võtame jutumärgid maha  ["Coca", "Fanta"]   --->  []
    // 3. lisame ühe juurde    ["Coca", "Fanta", "Sprite"]
    // 4. paneme jutumärgid tagasi  "["Coca", "Fanta", "Sprite"]"
    // 5. paneme localStorage-sse    "ostukorv" |   "["Coca", "Fanta", "Sprite"]"

    // let ostukorvLS = localStorage.getItem("ostukorv");
    // ostukorvLS = JSON.parse(ostukorvLS) || [];
    // ostukorvLS.push(klikitudToode);
    // ostukorvLS = JSON.stringify(ostukorvLS);
    // localStorage.setItem("ostukorv", ostukorvLS);
  }

  return (
    <div>
      {tooted.map((toode, jrkNr) => 
        <div key={jrkNr}>
          {toode}
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted