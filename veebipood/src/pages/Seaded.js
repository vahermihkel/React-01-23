import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {                     // null  (tühjus)        ----->
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "EE");
  const emailViide = useRef(); // ref -- reference ehk viide   emailRef
  const telefonViide = useRef(); // phoneRef
  const aadressViide = useRef();

  // function muudaKeel() {}
  // const muudaKeelEE = () => {
  //   uuendaKeel("EE");
  //   localStorage.setItem("keel", "EE");
  // }

  // const muudaKeelEN = () => {
  //   uuendaKeel("EN");
  //   localStorage.setItem("keel", "EN");
  // }

  // const muudaKeelRU = () => {
  //   uuendaKeel("RU");
  //   localStorage.setItem("keel", "RU");
  // }
                    // "EE", "EN", "RU"
  const muudaKeel = (uusKeel) => {   // const kustuta = (index) => {
    uuendaKeel(uusKeel);             //     poed.splice(index,1);
    localStorage.setItem("keel", uusKeel);
  } // scope    skoop      tema skoop on funktsiooni sees

  const salvestaEmail = () => {
    localStorage.setItem("email", emailViide.current.value); // inputi sisse sisestatud väärtus
    emailViide.current.value = "";
    toast.success("Email salvestatud!", {position: "bottom-right"});
  }         //  funktsiooni käivitamise hetkel ehk nupuvajutusel

  const salvestaTelefon = () => {
    localStorage.setItem("telefon", telefonViide.current.value);
    telefonViide.current.value = "";
    toast.success("Telefon salvestatud!", {position: "bottom-right"});
  }

  const salvestaAadress = () => { // parem klõps brauseris -> inspect -> console
    localStorage.setItem("aadress", aadressViide.current.value);
    aadressViide.current.value = "";
    toast.success("Aadress salvestatud!", {position: "bottom-right"});
  }

  return (
    <div>
      <div>
        <label>E-mail</label>
        <input ref={emailViide} type="text" />
        <button onClick={salvestaEmail}>Sisesta</button>
        <br />
        <label>Telefon</label>
        <input ref={telefonViide} type="text" />
        <button onClick={salvestaTelefon}>Sisesta</button>
        <br />
        <label>Aadress</label>
        <input ref={aadressViide} type="text" />
        <button onClick={salvestaAadress}>Sisesta</button>
        <br />
      </div>
      <button onClick={() => muudaKeel("EE")}>Eesti</button>
      <button onClick={() => muudaKeel("EN")}>English</button>
      <button onClick={() => muudaKeel("RU")}>Pycckuj</button>
      {keel === "EE" && <div>Leht on eesti keeles</div>}
      {keel === "EN" && <div>Page is in English</div>}
      {keel === "RU" && <div>Leht_on_eesti_keeles RU</div>}
      <ToastContainer />
    </div>
  )
}

export default Seaded