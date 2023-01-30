import { useState } from "react"


// rfce
function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([31, 12, 4, 99, 121, 55]);

  const az = () => {
    hinnad.sort();
    uuendaHinnad(hinnad.slice());
  }

  const za = () => {
    hinnad.sort();
    hinnad.reverse();
    uuendaHinnad(hinnad.slice());
  }

  const suurem = () => {
    hinnad.sort((a, b) => b - a);
    // hinnad.sort((a, b) => a - b);
    // hinnad.reverse();
    // hinnad.sort((a,b) => b > a ? 1 : -1);
    uuendaHinnad(hinnad.slice());
  }

  const v2iksem = () => {
    hinnad.sort((a, b) => a - b);
    uuendaHinnad(hinnad.slice());
  }

  const filtreeri = () => {
    const tulem = hinnad.filter(e => e > 30);
    uuendaHinnad(tulem);
  }

  const filtreeri2 = () => {      //    "312312"   --->   312312         Number("312312")
    const tulem = hinnad.filter(e => e.toString().startsWith("1")); // e.startsWith is not a function 
    uuendaHinnad(tulem);                            //    --> parem klõps -> inspect -> console
  }

  const paaritud = () => { // 5 % 4   // 0,1,2,3
    // const tulem = hinnad.filter(e => e % 2 !== 0); 
    const tulem = hinnad.filter(e => e % 2 === 1); 
    uuendaHinnad(tulem);
  }

  const vahenda = () => {
    const tulem = hinnad.map(e => e - 1);
    uuendaHinnad(tulem);
  }

  const suurenda = () => {
    const tulem = hinnad.map(e => e + 1);
    uuendaHinnad(tulem);
  }

  const kustuta = (index) => {
    hinnad.splice(index,1);
    uuendaHinnad(hinnad.slice());
  }

  return (
    <div>
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
      {hinnad.map((element, index) => <button key={index} onClick={() => kustuta(index)}>{element}</button>)}
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