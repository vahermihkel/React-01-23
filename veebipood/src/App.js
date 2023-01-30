import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Hinnad from './pages/Hinnad';
import LisaToode from './pages/LisaToode';
import Meist from './pages/Meist';
import Ostukorv from './pages/Ostukorv';
import Poed from './pages/Poed';
import Seaded from './pages/Seaded';

// Meil juhtub programmis kahte tüüpi vigu
// 1. Kompileerimise vead  
//  (compiled successfully - kõik korras, 
//    compiled with warnings - pakkis koodi kokku mingite parendusvõimalustega,
//      compiled with errors - LEHT ON KATKI, KÕIK ON PUNANE)
// kommunikeerib ilusasti ka faili, kus see juhtus ja mis real see juhtus

// 2. runtime errorid ehk brauseris töötamise errorid
// parem klõps hiirega -> inspect -> console
// leht on üleni valge
// tasub guugeldada, võttes errori ja vaadata mis google vastab

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>
      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>
      <Link to="/meist">
        <button className="nupp">Meist</button>
      </Link>
      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>
      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>
      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      {/* localhost:3000    www.mihkelmihkel.ee */}
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="poed" element={ <Poed /> } />
        <Route path="hinnad" element={ <Hinnad /> } />
      </Routes>

      {/* self-closing: <Avaleht /> <img className="pilt" src="" alt="" />  <input ref={} type="text" /> <br />  */}
      {/* algus ja lõpu tag: div, button, Link,  */}
    </div>
  );
}

export default App;

// find error 

// alternative text
// 1. kui pilti kätte ei saada sealt veebilehelt, siis näidatakse alternative texti
// 2. pimedatele loetakse ette alt   WCAG    EU nõue, et riigiasutusel peab läbima testi
// 3. arendajatele info mis seal pildi taga asub
// ctrl + ä kommentaar

/*

sadas

asd

asdas
*/