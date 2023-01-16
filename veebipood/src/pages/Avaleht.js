import { useState } from "react";

// tumesinine - HTMLs <div>, <button>   JS function, const, let --- liigitused
// keskmine sinine - muutuja
// helesinine - HTML elemendi atribuut, element attribute/property    JS   JavaScripti/Reacti muutujad
// kollane - funktsioon, üldiselt on sulud lõpus
// lillad - import, from, export, return, default  ülejäänud muud sõnad
// kõik sulud - loogeline, kandiline, tavaline -: kollane, lilla, sinine, kollane, lilla, sinine
//            see ei tähenda midagi
// väljakommenteeritud: roheline {{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}
// Suure tähega + Roheline HTMLs - imporditud kood
// oranž - jutumärkides väärtus (pole vahet kas ühekordsed või kahekordsed jutumärgid)

function Avaleht() {
  const [kogus, uuendaKogus] = useState(0); // numbrilised väärtused --- arvutused: kogusumma, kogus, kalkulaator
  const [sonum, uuendaSonum] = useState(""); // sõnalised väärtused --- nimi, isikukood, telefoninumber, asukoht
  const [laigitud, uuendaLaigitud] = useState(false); // kahendväärtused --- makstud, täisealine, sisselogitud, aktiveeritud

  function nulli() {  
    uuendaKogus(0);    // asenda: uuendaKogus(0);      <div>{kogus}</div>  -->   <div>0</div>
    uuendaSonum("Panid nulli");
  }

  function v2henda() {   // asenda: uuendaKogus(-100);      <div>{kogus}</div>  -->   <div>-100</div>
    uuendaKogus(kogus - 1);   // uuenda:   uuendaKogus(500 - 100)    <div>{kogus}</div>  -->   <div>400</div>
    uuendaSonum("Vähendasid kogust");
  }

  function suurenda() {  // asenda: uuendaKogus(100);      <div>{kogus}</div>  -->   <div>100</div>
    uuendaKogus(kogus + 1); // uuenda:   uuendaKogus(200 + 100)    <div>{kogus}</div>  -->   <div>300</div>
    uuendaSonum("Suurenda kogust");
  }

  return (
    <div>
      {laigitud === true && <img onClick={() => uuendaLaigitud(false)} src="/laigitud.svg" alt="" />}
      {laigitud === false && <img onClick={() => uuendaLaigitud(true)} src="/mittelaigitud.svg" alt="" />}

      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <br />
      <button disabled={kogus === 0} onClick={v2henda}>-</button>
      <div>{kogus}</div>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht