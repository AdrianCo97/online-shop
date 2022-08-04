import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import "./login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login() {
  const [passwordState, setPasswordState] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (event) => {
    setPasswordState({ ...passwordState, password: event.target.value });
  };

  const showOrHidePassword = () => {
    if (passwordState.showPassword) {
      setPasswordState({ ...passwordState, showPassword: false });
    } else {
      setPasswordState({ ...passwordState, showPassword: true });
    }
  };

  return (
    <form className="login-box">
      <p>{passwordState.password}</p>
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
          type={passwordState.showPassword ? "text" : "password"}
          autoComplete="off"
          onChange={(event) => handleChange(event)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={showOrHidePassword}>
                  {passwordState.showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
