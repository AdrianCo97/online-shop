import { TextField } from "@mui/material";
import { useState } from "react";
import "./login.css";

function Login() {
  const [passwordState, setPasswordState] = useState();

  const handleChange = (event) => {
    setPasswordState(event.target.value);
  };

  return (
    <form className="login-box">
      <p>Login</p>
      <div className="body">
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          sx={{ mb: 2 }}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          autoComplete="off"
          onChange={(event) => handleChange(event)}
          sx={{ mb: 2 }}
          
        />
        <div className="buttons">
          <button className="submit-button">Login</button>
          <button className="submit-button">Not registered?</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
