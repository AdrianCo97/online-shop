import { TextField } from "@mui/material";
import {useState} from "React";
import "./login.css";

function Login() {

    const[passwordState, setPasswordState] = useState({
        password: "",
        showPasswords: false
    })
  return (
    <div className="login-box">
      <p>Login</p>
      <div className="body">
        <TextField id="email" label="Email" variant="outlined" sx={{ mb: 2 }} />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <div className="buttons">
          <button className="submit-button">Login</button>
          <button className="submit-button">Not registered?</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
