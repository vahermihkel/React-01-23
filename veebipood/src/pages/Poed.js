import { useRef } from "react";
import { useState } from "react"; // mitte midagi ees tähendab node_modules kaustast
import poedFailist from "../poed.json"; // ../ tähendab ühe kausta võrra ülespoole
                              //   ./ tähistab samas kaustas
// 5 tüüpi
// - sõnad   primitiiv
// - numbrid   primitiiv
// - kahendväärtused   primitiiv
// - objektid   koosneb primitiivsetest väärtustest (või keerulisematel juhtudel omakorda objekt või array tema sees)
// - array'd    koosneb primitiivsetest väärtustest (meil ka objektidest)

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);

  const tagasiOriginaali = () => {
    uuendaPoed(poedFailist);
  }

  const sorteeriAZ = () => {
    // Ülemiste.compare(Viimsi) --> ees või tagapool
    // Viimsi.compare(Rocca al Mare) --> ees või tagapool

    // {"nimi": "Ülemiste", "aeg": "9-22"}.compare({"nimi": "Viimsi",  "aeg": "8-22"})
            // Ülemiste.compare(Viimsi) --> ees või tagapool
    poed.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaPoed(poed.slice()); 
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaPoed(poed.slice()); 
  }

  const sorteeriTahtKasv = () => {
    poed.sort((a,b) => a.nimi.length - b.nimi.length); 
    uuendaPoed(poed.slice()); 
  }

  const sorteeriTahtKah = () => {
    poed.sort((a,b) => b.nimi.length - a.nimi.length); 
    uuendaPoed(poed.slice()); 
  }

  const sorteeriTeineTahtAZ = () => {    
    poed.sort((a,b) => a.nimi.charAt(1).localeCompare(b.nimi.charAt(1))); 
    uuendaPoed(poed.slice()); 
  }

  const filtreeriELoppevad = () => {
    // Ülemiste.endsWith("e") ---> true/false

    // {"nimi": "Ülemiste", "aeg": "9-22"}.filter ({"nimi": "Viimsi",  "aeg": "8-22"})
                // Ülemiste.endsWith("e") --> true/false
    const tulem = poed.filter(e => e.nimi.endsWith("e"));
    uuendaPoed(tulem);
  }

  const filtreeriRohkemKui8Tahemarki = () => {
    const tulem = poed.filter(e => e.nimi.length > 8);
    uuendaPoed(tulem);
  }

  const filtreeri9Tahemarki = () => {
    const tulem = poed.filter(e => e.nimi.length === 9);                                           
    uuendaPoed(tulem);
  }

  const filtreeriKolmasTahtI = () => {
    const tulem = poed.filter(e => e.nimi.charAt(2) === "i");
    uuendaPoed(tulem);
  }

  const filtreeriSonasIs = () => {
    //                              loogelised sulud ja return on siin vabatahtlik
    //                              ei ole vabatahtlik KUI on mitu koodirida 
    // const tulem = poed.filter(e => {return e.nimi.includes("is")});    
    //                e ümber sulud on siin vabatahtlik
    //                ei ole vabatahtlik KUI lisaks elemendile kasutan ka järjekorranumbrit
    // const tulem = poed.filter((e) => {return e.nimi.includes("is")});                                                                                  
    const tulem = poed.filter(e => e.nimi.includes("is"));                                           
    uuendaPoed(tulem);
  }

  // .map ei tööta
  const muudaKoikSuureks = () => {
    // Ülemiste.toUpperCase() ---> ÜLEMISTE

    // {"nimi": "Ülemiste", "aeg": "9-22"} asenda  ÜLEMISTE
    // AGA TEGELIKULT TAHAN: {"nimi": "ÜLEMISTE", "aeg": "9-22"}
        // Ülemiste.toUpperCase() --> ÜLEMISTE

    const tulem = poed.map(e => {return{"nimi": e.nimi.toUpperCase(), "aeg": e.aeg}});                                           
    uuendaPoed(tulem);
  }

  const muudaKoikVaikseks = () => {
    const tulem = poed.map(e => {return{"nimi": e.nimi.toLowerCase(), "aeg": e.aeg}});                                           
    uuendaPoed(tulem);
  }

  const muudaITahedOTahtedeks = () => {
    const tulem = poed.map(e => {return{"nimi": e.nimi.replaceAll("i", "o"), "aeg": e.aeg}});                                           
    uuendaPoed(tulem);
  }

  const muudaTahtedeArvLoppu = () => {
    const tulem = poed.map(e => {return{"nimi": e.nimi + e.nimi.length, "aeg": e.aeg}});                                           
    uuendaPoed(tulem);
  }

  const muudaKriipsudAlgusesse = () => {
    //         ... on spread operator ehk jätab alles kõik varasemad väärtused
    const tulem = poed.map(e => {return{...e, "nimi": "--" + e.nimi}});                                           
    // const tulem = poed.map(e => {return{"nimi": "--" + e.nimi, "aeg": e.aeg}});                                           
    uuendaPoed(tulem);
  }

  const kustuta = (index) => {
    poed.splice(index,1); 
    uuendaPoed(poed.slice());
  }

  const nimiViide = useRef(); 
  const aegViide = useRef(); 

  const lisa = () => {
            // ("Ülemiste") --> ({"nimi": "Ülemiste", "aeg": "8-23"})
    poed.push({"nimi": nimiViide.current.value, "aeg": aegViide.current.value});
    uuendaPoed(poed.slice());
    nimiViide.current.value = "";
    aegViide.current.value = "";
  }

  return (
    <div>
      <label>Uue poe nimi</label> <br />
      <input ref={nimiViide} type="text" /> <br />
      <label>Uue poe lahtiolekuaeg</label> <br />
      <input ref={aegViide} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br /> <br />
      <button onClick={tagasiOriginaali}>Tagasi originaali</button>
      <button onClick={() => uuendaPoed([])}>Kustuta kõik</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahtKasv}>Sorteeri Taht kasv</button>
      <button onClick={sorteeriTahtKah}>Sorteeri Taht kah</button>
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine täht A-Z</button>
      <button onClick={filtreeriELoppevad}>Filtreeri e'ga lõppevad</button>
      <button onClick={filtreeriRohkemKui8Tahemarki}>Filtreeri rohkem kui 8 tähelised</button>
      <button onClick={filtreeri9Tahemarki}>Filtreeri 9 tähelised</button>
      <button onClick={filtreeriKolmasTahtI}>Filtreeri kolmas täht "i"</button>
      <button onClick={filtreeriSonasIs}>Filtreeri sõnas tähed "is"</button>
      <button onClick={muudaKoikSuureks}>Muuda kõik suurteks tähtedeks</button>
      <button onClick={muudaKoikVaikseks}>Muuda kõik väikesteks tähtedeks</button>
      <button onClick={muudaITahedOTahtedeks}>Muuda kõik i tähed o tähtedeks</button>
      <button onClick={muudaTahtedeArvLoppu}>Muuda kõigile tähemärkide arv lõppu</button>
      <button onClick={muudaKriipsudAlgusesse}>Muuda kõigile kriipsud ette</button>
      <div>Poode on {poed.length} tk</div>
      {poed.map((e, i) => 
        <div key={i}>
          {e.nimi}: 
          {e.aeg}
          <button onClick={() => kustuta(i)}>x</button>
        </div>)}
    </div>
  )
}

// Objects are not valid as a React child (found: object with keys {nimi, aeg})

export default Poed