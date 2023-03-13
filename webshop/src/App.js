import './App.css';
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import {ContactUs} from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Shops from "./pages/Shops";
import Signup from "./pages/Signup";
import SingleProduct from "./pages/SingleProduct";
import AddProduct from "./pages/admin/AddProduct";
import AdminHome from "./pages/admin/AdminHome";
import EditProduct from "./pages/admin/EditProduct";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import NotFound from './pages/NotFound';
import NavigationBar from './components/NavigationBar';
import { useContext } from 'react';
import AuthContext from './store/AuthContext';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <NavigationBar />
      {/* NAVIGATIONBAR */}
      
      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <Signup /> } />
        {authCtx.isLoggedIn === true && 
          <>
            <Route path="admin" element={ <AdminHome /> } />
            <Route path="admin/add-product" element={ <AddProduct /> } />
            <Route path="admin/edit-product/:id" element={ <EditProduct /> } />
            <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
            <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
            <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
          </>}
        <Route path="*" element={ <NotFound /> } />
        {/* <Route path="*" element={ <Navigate to="/" /> } />  <--- import react-router-dom       */}
      </Routes>

      {/* FOOTER */}
    </div>
  );
}

export default App;

// KOJU: API otspunktide päringute
// 09.03 N 17.30 --> Loader, sisestamise kontrollid Addis ja Editis, dünaamiline CSS, makse
// KOJU: Nortali proovitöö
// 13.03 E 17.30 --> sisselogimine/registreerumine läbi Firebase-i
// 15.03 K 17.30 --> lahendame Nortali proovitööd 

// Iseseisev lõpuprojekt
// ükskõik mis asi, mis on tehtud Reactis
// Youtubest mingi tutoriali järgi tegemine
// OpenAI / ChatGPT järgi tegemine
// ise nullist tehtud projekt

// 29.03???