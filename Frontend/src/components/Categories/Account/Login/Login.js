import {
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Collapse,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext.js";
import "./login.css";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const navigateToAccountPage = () => {
    navigate("/createaccount");
  };

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [errorMessage, setErrorMessage] = useState({
    message: "",
    isError: false,
  });

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
      body: JSON.stringify({
        email: userInput.email,
        password: userInput.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.json().then((data) => {
            e.preventDefault();
            setErrorMessage({ message: data.error, isError: true });
          });
        }
      })
      .then((data) => {
        if (data != null) {
          setUser({
            user: {
              firstname: data.user.firstname,
              lastname: data.user.lastname,
              email: data.user.email,
            },
            accessToken: data.accessToken,
            isLoggedIn: true,
          });
          navigate("/")
        } else {
          return undefined;
        }
      });
  };

  return (
    <form className="login-box" onSubmit={login}>
      <div className="login-box-header">
        <h2 className="login-box-title">Login</h2>
      </div>
      <div className="login-box-body">
        <TextField
          id="email"
          required
          label="Email"
          variant="filled"
          type="email"
          sx={{ mb: 2 }}
          onChange={(event) =>
            setUserInput({ ...userInput, email: event.target.value })
          }
        />
        <TextField
          id="password"
          required
          label="Password"
          variant="filled"
          type={userInput.showPassword ? "text" : "password"}
          autoComplete="off"
          onChange={(event) =>
            setUserInput({ ...userInput, password: event.target.value })
          }
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
        <Collapse in={errorMessage.isError} sx={{ mb: 2 }}>
          <Alert
            severity="error"
            action={
              <IconButton
                onClick={() => setErrorMessage({ isError: false, message: "" })}
              >
                <CloseIcon></CloseIcon>
              </IconButton>
            }
          >
            <AlertTitle>{errorMessage.message}</AlertTitle>
          </Alert>
        </Collapse>
        <div className="login-box-buttons">
          <Button type="submit" sx={{ width: 200, mb: 1 }} variant="contained">
            Login
          </Button>
          <Button
            sx={{ width: 200 }}
            variant="contained"
            onClick={() => {
              navigateToAccountPage();
            }}
          >
            Not registered?
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Login;
