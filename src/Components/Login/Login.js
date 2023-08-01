import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../store/Context";
import { useHistory } from "react-router-dom";

import Logo from "../../olx-logo.png";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
         history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email} // Set value from the state variable
            onChange={(e) => setemail(e.target.value)} // Update state on change
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password} // Set value from the state variable
            onChange={(e) => setPassword(e.target.value)} // Update state on change
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
