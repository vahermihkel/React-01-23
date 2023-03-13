import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import CartSumContext from "../store/CartSumContext";
import AuthContext from "../store/AuthContext";

function NavigationBar() {
  const { t, i18n } = useTranslation();
  const cartSumCtx = useContext(CartSumContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate(); // <-- import from react-router-dom

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

  // const login = () => {
  //   authCtx.setLoggedIn(true);
  // }

  const logout = () => {
    authCtx.setLoggedIn(false);
    navigate("/");
    sessionStorage.removeItem("token");
  }

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
        <Nav className="me-auto">
          {authCtx.isLoggedIn === true && <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>}
          <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
          <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
          <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
          {authCtx.isLoggedIn === false && <Nav.Link as={Link} to="/login">Logi sisse</Nav.Link>}
          {authCtx.isLoggedIn === false && <Nav.Link as={Link} to="/signup">Registreeru</Nav.Link>}
          {authCtx.isLoggedIn === true && <Nav.Link onClick={logout}>Logi välja</Nav.Link>}
        </Nav>
        <div className="cart-sum">{cartSumCtx.cartSum} €</div>
        <img className="lang" src="/english.png" alt="" onClick={() => changeLang("en")} />
        <img className="lang" src="/estonian.png" alt="" onClick={() => changeLang("ee")} />
      </Container>
    </Navbar>
  )
}

export default NavigationBar