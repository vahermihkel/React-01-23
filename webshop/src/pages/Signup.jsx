import { useContext } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { Button, TextField } from '@mui/material';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARfYPzTUIFOOTS0GOOuhKLGoi9wenOmqQ";
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const addUser = () => {
    const newUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      returnSecureToken: true,
    };
    fetch(url, { method: "POST", body: JSON.stringify(newUser) })
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
      <div>{message}</div>
      <br />
      <TextField label="Email" ref={emailRef} type="text" /> <br /> <br />
      <TextField label="Password" ref={passwordRef} type="password" /> <br /> <br />
      <Button variant="contained" onClick={addUser}>Registreeru</Button>
      <br />
    </div>
  );
}

export default Signup;
