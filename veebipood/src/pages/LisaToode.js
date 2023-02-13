import { useRef, useState } from "react"

// use-ga algavad on Reacti hookid
// Hookid:
// alati funktsiooni kujul võetakse kasutusele ehk pannakse sulud lõppu
// alati imporditakse
// alati kõige üles - mitte tingimuslikult
// alati use--- eesliidesega

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa toode!");
  const nimiRef = useRef(); // reference
  const hindRef = useRef(); // numbriline
  const piltRef = useRef(); // sõnaline
  const aktiivneRef = useRef(); // kahendväärtus

  // function lisa() {

  // }   ! need on täpselt samad

  const lisa = () => {
    if (nimiRef.current.value === "") {
      muudaSonum("Tühja nimetusega ei saa lisada!");
    } else {
      muudaSonum("Toode lisatud " + nimiRef.current.value);
      // ["Nobe", "BMW", "Mercedes"]
      //[{"nimi": "Nobe", "hind": 6, "pilt": "", "aktiivne": true}, "BMW", "Mercedes", "Tesla"]
      const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
      // ["Nobe", "BMW", "Mercedes", "Tesla"]
      const lisaToode = {
        "nimi": nimiRef.current.value,
        "hind": Number(hindRef.current.value),
        "pilt": piltRef.current.value,
        "aktiivne": aktiivneRef.current.checked,
      }
      tooted.push(lisaToode);

      // tooted.push({
      //   "nimi": nimiRef.current.value,
      //   "hind": hindRef.current.value,
      //   "pilt": piltRef.current.value,
      //   "aktiivne": aktiivneRef.current.value,
      // });

      localStorage.setItem("tooted", JSON.stringify(tooted));
      nimiRef.current.value = "";
    }
  }

  return (
    <div>
      <label>Uue toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Uue toote hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Uue toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Uue toote aktiivsus</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <button onClick={lisa}>Lisa toode</button> <br />
      <div>{sonum}</div>
    </div>
  )
}

  // console.log --- puhtalt arendajate jaoks, kuvamaks välja muutujate sees olevat infot
  // console.log(nimiRef);
  // console.log(nimiRef.current); // <input ref={nimiRef} type="text" />
  // console.log(nimiRef.current.value); // reaalne väärtus

  // nimiRef.current.value;
  // document.getElementById("inputi_ID").value;

export default LisaToode