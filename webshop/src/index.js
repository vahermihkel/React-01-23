import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css'; // võtab kasutusele Leafleti CSSi
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import './i18n';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartSumContextProvider } from "./store/CartSumContext";
import { AuthContextProvider } from "./store/AuthContext";

// 1. npm i react-toastify
// 2. npm start
// 3. index.js faili react-toastify import
// 4. failis kus lähen Toastify'd kasutama, panen impordid
// 5. Panen HTMLi Toastify tagi
// 6. Võtan kuskil funktsioonis kasutusele

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartSumContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </CartSumContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
