import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// kustutasin impordi

// navigeerimiseks pean:
// 1. installeerima npm kaudu kõik vajalikud failid node_modules kausta: "npm i react-router-dom"
// 2. lisan meie App komponendile (App.js failile) võimekuse, et temas saab navigeerida
//      ümbritsedes App BrowserRouteriga

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// kustutasin kasutusele võtu