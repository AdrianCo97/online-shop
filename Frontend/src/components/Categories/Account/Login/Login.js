import { IconButton, InputAdornment, TextField, useInput } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext.js";
import "./login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const navigateToAccountPage = () => {
    navigate("/createaccount");
  };

  const [userInput, setUserInput] = useState({ 
    email: "",
    password: "",
    showPassword: false
  })

  const showOrHidePassword = () => {
    if (userInput.showPassword) {
      setUserInput({ ...userInput, showPassword: false });
    } else {
      setUserInput({ ...userInput, showPassword: true });
    }
  };

  const login = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email: userInput.email, password: userInput.password}),
    }).then((response) => {
      console.log(response.json());
    });
  };

  return (
    <form className="login-box" onSubmit={login}>
      <div className="header">
        <h2>Login</h2>
      </div>
      <div className="body">
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          sx={{ mb: 2 }}
          onChange={(event) => setUserInput({...userInput, email: event.target.value})}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type={userInput.showPassword ? "text" : "password"}
          autoComplete="off"
          onChange={(event) => setUserInput({...userInput, password: event.target.value})}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={showOrHidePassword}>
                  {userInput.showPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
        <div className="buttons">
          <button className="submit-button">Login</button>
          <button onClick={navigateToAccountPage} className="submit-button">
            Not registered?
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
