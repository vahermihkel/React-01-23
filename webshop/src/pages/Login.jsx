import { useContext } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { useTranslation } from "react-i18next";
import { Button, TextField } from '@mui/material';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARfYPzTUIFOOTS0GOOuhKLGoi9wenOmqQ";
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const { t } = useTranslation();

  const login = () => {
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      returnSecureToken: true,
    };
    fetch(url, { method: "POST", body: JSON.stringify(user) })
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          setMessage(json.error.message);
        } else {
          navigate("/admin"); 
          authCtx.setLoggedIn(true);
          sessionStorage.setItem("token", json.idToken);
        }
      });
  };

  return (
    <div className="center">
      <div>{t(message)}</div>
      <br />
      <TextField label="Email" ref={emailRef} type="text" /> <br /> <br />
      <TextField label="Password" ref={passwordRef} type="password" /> <br /> <br />
      <Button variant="contained" onClick={login}>Logi sisse</Button>
      <br />
    </div>
  );
}

export default Login;
