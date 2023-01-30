import { useRef } from "react";
import { useState } from "react"

// poed??, tooted, kasutajad, kategooriad??, tellimused, pakiautomaadid....

// sort (a,b) =>   võrdus    arv jääb samaks, aga järjekord tuleb teine
// filter (e) =>   true/false   arv jääb vähemaks, aga kõik jäävad samaks ja järjekord ka samaks
// map   (e) =>   uus väärtus    arv jääb samaks, järjekord jääb samaks, aga kõik muutuvad

// rfce
function Poed() {
  const [poed, uuendaPoed] = useState(["Ülemiste", "Viimsi", "Rocca al Mare", "Magistral", "Vesse", "Kristiine", "Järveotsa"]);

  const tagasiOriginaali = () => {
    uuendaPoed(["Ülemiste", "Viimsi", "Rocca al Mare", "Magistral", "Vesse", "Kristiine", "Järveotsa"]);
  }

  const sorteeriAZ = () => {
    //poed.sort(); // default A-Z sorteerimine
    poed.sort((a,b) => a.localeCompare(b));
    uuendaPoed(poed.slice()); // .slice() on lõige ehk ta lõikab ära mälukoha - 
    //  iga kord kui muudan array-d ja vajan muutust HTMLs, pean panema .slice()
    // .slice on shallow copy ehk võetakse väärtused, aga mitte mälukoht
    //uuendaPoed([...poed]); // vaja tekitada koopia, pean kustutama tema pärinevuskoha (mälukoha)
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.localeCompare(a)); // a - vasakpoolse, b- parempoolse
    uuendaPoed(poed.slice()); 
  }

  const sorteeriTahtKasv = () => {
    // Kristiine   Vesse  8  5   
    poed.sort((a,b) => a.length - b.length); // meil on sissekirjutatud funktsionaalsused nagu: startsWith(), length
    uuendaPoed(poed.slice()); 
  }

  const sorteeriTahtKah = () => {
      // Kristiine   Vesse  5         8     
    poed.sort((a,b) => b.length - a.length); 
    uuendaPoed(poed.slice()); 
  }

  const sorteeriTeineTahtAZ = () => {                           // 0123
                    // Kristiine   Vesse    r.localeCompare(e)  -- 1 või 0, 1ga vahetab
    poed.sort((a,b) => a.charAt(1).localeCompare(b.charAt(1))); // Kristiine
    uuendaPoed(poed.slice()); 
  }

  const filtreeriELoppevad = () => {
    const tulem = poed.filter(e => e.endsWith("e"));
    uuendaPoed(tulem);
  }

  const filtreeriRohkemKui8Tahemarki = () => {
    const tulem = poed.filter(e => e.length > 8);
    uuendaPoed(tulem);
  }

  const filtreeri9Tahemarki = () => {
    const tulem = poed.filter(e => e.length === 9);                                           
    uuendaPoed(tulem);
  }

  const filtreeriKolmasTahtI = () => {
    const tulem = poed.filter(e => e.charAt(2) === "i");
    uuendaPoed(tulem);
  }

  const filtreeriSonasIs = () => {
    const tulem = poed.filter(e => e.includes("is"));                                           
    uuendaPoed(tulem);
  }

  const muudaKoikSuureks = () => {
    const tulem = poed.map(e => e.toUpperCase());                                           
    uuendaPoed(tulem);
  }

  const muudaKoikVaikseks = () => {
    const tulem = poed.map(e => e.toLowerCase());                                           
    uuendaPoed(tulem);
  }

  const muudaITahedOTahtedeks = () => {
    const tulem = poed.map(e => e.replaceAll("i", "o"));                                           
    uuendaPoed(tulem);
  }

  const muudaTahtedeArvLoppu = () => {
    const tulem = poed.map(e => e + e.length);                                           
    uuendaPoed(tulem);
  }

  const muudaKriipsudAlgusesse = () => {
    const tulem = poed.map(e => "--" + e);                                           
    uuendaPoed(tulem);
  }

  const kustuta = (index) => {
    // 0, 1, 2, 3
    poed.splice(index,1); // mitmendat kustutan KOMA mitu tk
    uuendaPoed(poed.slice());
  }

  const nimiViide = useRef(); // useRef-st import!

  const lisa = () => {
    poed.push(nimiViide.current.value);
    uuendaPoed(poed.slice());
  }

  return (
    <div>
      <label>Uue poe nimi</label> <br />
      <input ref={nimiViide} type="text" /> <br />
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
          {e}
          <button onClick={() => kustuta(i)}>x</button>
        </div>)}
      <div>----------------</div>
      <div>Ülemiste</div>
      <div>Viimsi</div>
      <div>Rocca al Mare</div>
      <div>Magistral</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div>
    </div>
  )
}

export default Poed