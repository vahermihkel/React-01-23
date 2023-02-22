import { useState } from "react"


// rfce
function Hinnad() {
  const [hinnad, uuendaHinnad] = useState(
    [
      {"nimi": "Coca 6 pakk", "hind": 31, "valuuta": "EUR", "alandatud": false}, 
      {"nimi": "Red bull", "hind": 12, "valuuta": "USD", "alandatud": true}, 
      {"nimi": "Vichy", "hind": 4, "valuuta": "EUR", "alandatud": true}, 
      {"nimi": "Fat burn", "hind": 99, "valuuta": "JPN", "alandatud": false}, 
      {"nimi": "Fanta kast", "hind": 121, "valuuta": "EUR", "alandatud": true}, 
      {"nimi": "Budweiser", "hind": 55, "valuuta": "USD", "alandatud": true}
    ]
  );

  const nulliFiltrid = () => {
    uuendaHinnad([
      {"nimi": "Coca 6 pakk", "hind": 31, "valuuta": "EUR", "alandatud": false}, 
      {"nimi": "Red bull", "hind": 12, "valuuta": "USD", "alandatud": true}, 
      {"nimi": "Vichy", "hind": 4, "valuuta": "EUR", "alandatud": true}, 
      {"nimi": "Fat burn", "hind": 99, "valuuta": "JPN", "alandatud": false}, 
      {"nimi": "Fanta kast", "hind": 121, "valuuta": "EUR", "alandatud": true}, 
      {"nimi": "Budweiser", "hind": 55, "valuuta": "USD", "alandatud": true}
    ]);
  }

  const az = () => {
    // => {}.localeCompare({})      .hind  et saada primitiivini
    // => 31.localeCompare(12)     numbreid ei saa locale kaudu võrrelda, pean teisendama tüübi sõnaks
    // => "31".localeCompare("12")
    hinnad.sort((a,b) => a.hind.toString().localeCompare(b.hind.toString()));
    uuendaHinnad(hinnad.slice());
  }

  const za = () => {
    hinnad.sort((a,b) => b.hind.toString().localeCompare(a.hind.toString()));
    uuendaHinnad(hinnad.slice());
  }

  const suurem = () => {
    hinnad.sort((a, b) => b - a); // KODUS LÕPETADA
    uuendaHinnad(hinnad.slice());
  }

  const v2iksem = () => {
    hinnad.sort((a, b) => a - b); // KODUS LÕPETADA
    uuendaHinnad(hinnad.slice());
  }

  const filtreeri = () => {
    const tulem = hinnad.filter(e => e > 30); // KODUS LÕPETADA 
    uuendaHinnad(tulem);
  }

  const filtreeri2 = () => {      //    "312312"   --->   312312         Number("312312")
    const tulem = hinnad.filter(e => e.hind.toString().startsWith("1")); // e.startsWith is not a function 
    uuendaHinnad(tulem);                            //    --> parem klõps -> inspect -> console
  }

  const paaritud = () => { 
    const tulem = hinnad.filter(e => e % 2 === 1);  // KODUS LÕPETADA
    uuendaHinnad(tulem);
  }

  const vahenda = () => {
    const tulem = hinnad.map(e => {return{...e, "hind": e.hind - 1}});
    uuendaHinnad(tulem);
  }

  const suurenda = () => {
    const tulem = hinnad.map(e => {return{...e, "hind": e.hind + 1}});
    uuendaHinnad(tulem);
  }

  const kustuta = (index) => {
    hinnad.splice(index,1);
    uuendaHinnad(hinnad.slice());
  }

  const arvutaNumbridKokku = () => {
    console.log("ARVUTATUD!"); // <--- parem klõps -> inspect -> console vaatesse kirjutas sõnumi
    // let summa = 0;
    // hinnad.forEach(hind => summa += hind);
    // hinnad.forEach(hind => summa = summa + hind);
    // return summa;
                        // 0      31
                        // 0     {"nimi": "Coca 6 pakk", "hind": 31, "valuuta": "EUR", "alandatud": false}
    return hinnad.reduce((summa, toode) => summa + toode.hind, 0);
  }

  return (
    <div>
      <button onClick={nulliFiltrid}>Nulli filtrid</button>
      <br />
      <button onClick={az}>Sorteeri A-Z</button>
      <button onClick={za}>Sorteeri Z-A</button>
      <button onClick={suurem}>Sorteeri suurem enne</button>
      <button onClick={v2iksem}>Sorteeri väiksem enne</button>
      <br />
      <button onClick={filtreeri}>Filtreeri suuremad kui 30</button>
      <button onClick={filtreeri2}>Filtreeri sisse 1ga algavad</button>
      <button onClick={paaritud}>Filtreeri sisse paaritud</button>
      <br />
      <button onClick={vahenda}>Vähenda igaüht 1 võrra</button>
      <button onClick={suurenda}>Suurenda igaüht 1 võrra</button>
      <br />
      <br />
      {hinnad.map((element, index) => 
        <button key={index} onClick={() => kustuta(index)}>
          {element.hind}
        </button>
          )}
      <div>Kokku: {arvutaNumbridKokku()}</div>
    </div>      
  )
}
//  0    1  2  3    4    5
// [31, 12, 4, 99, 121, 55]
// ((31, 0) => <button key=0>31</button>)
// ((12, 1) => <button key=1>12</button>)
// ((4, 2) => <button key=2>4</button>)
// ((99, 3) => <button key=3>99</button>)
// ((121, 4) => <button key=4>121</button>)
// ((55, 5) => <button key=5>55</button>)

//  0   1   2   3   4   5
// [4, 12, 31, 55, 99, 121]
// ((4, 0) => <button key=0>4</button>)
// ((12, 1) => <button key=1>12</button>)
// ...............
// ((121, 5) => <button key=5>121</button>)

export default Hinnad