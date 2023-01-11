import { useRef, useState } from "react"

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();

  // function lisa() {

  // }   ! need on täpselt samad

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      muudaSonum("Tühja nimetusega ei saa lisada!");
    } else {
      muudaSonum("Toode lisatud " + inputiLuger.current.value);
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

export default LisaToode