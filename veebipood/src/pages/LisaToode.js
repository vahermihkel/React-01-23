import { useRef, useState } from "react"

// use-ga algavad on Reacti hookid
// Hookid:
// alati funktsiooni kujul võetakse kasutusele ehk pannakse sulud lõppu
// alati imporditakse
// alati kõige üles - mitte tingimuslikult
// alati use--- eesliidesega

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef(); // reference

  // function lisa() {

  // }   ! need on täpselt samad

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      muudaSonum("Tühja nimetusega ei saa lisada!");
    } else {
      muudaSonum("Toode lisatud " + inputiLuger.current.value);
      const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
      tooted.push(inputiLuger.current.value);
      localStorage.setItem("tooted", JSON.stringify(tooted));
      inputiLuger.current.value = "";
    }
  }

  return (
    <div>
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Lisa toode</button> <br />
      <div>{sonum}</div>
    </div>
  )
}

  // console.log --- puhtalt arendajate jaoks, kuvamaks välja muutujate sees olevat infot
  // console.log(inputiLuger);
  // console.log(inputiLuger.current); // <input ref={inputiLuger} type="text" />
  // console.log(inputiLuger.current.value); // reaalne väärtus

  // inputiLuger.current.value;
  // document.getElementById("inputi_ID").value;

export default LisaToode