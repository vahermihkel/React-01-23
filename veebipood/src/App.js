import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';

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
      <Link to="/avaleht">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>
      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      {/* localhost:3000/avaleht */}
      <Routes>
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
      </Routes>

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