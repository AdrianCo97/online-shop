import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./createAccount.css";

function CreateAccount() {
  const [userInput, setUserInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [passwordState, setPasswordState] = useState({
    password: "",
    showPassword: false,
  });

  const navigate = useNavigate();
  const navigateToLoginPage = () => {
    navigate("/login");
  };

  const changePasswordVisability = () => {
    if (!passwordState.showPassword) {
      setPasswordState({ ...passwordState, showPassword: true });
    } else {
      setPasswordState({ ...passwordState, showPassword: false });
    }
  };

  return (
    <form className="create-account-box">
      <div className="header">
        <h2>Create Account</h2>
      </div>
      <div className="body">
        <TextField
          label="firstname"
          sx={{ mb: 2 }}
          onChange={(e) =>
            setUserInput({ ...userInput, firstname: e.target.value })
          }
        />
        <TextField
          label="lastname"
          sx={{ mb: 2 }}
          onChange={(e) =>
            setUserInput({ ...userInput, lastname: e.target.value })
          }
        />
        <TextField
          label="email"
          sx={{ mb: 2 }}
          onChange={(e) =>
            setUserInput({ ...userInput, email: e.target.value })
          }
        />
        <TextField
          label="password"
          type={passwordState.showPassword ? "text" : "password"}
          sx={{ mb: 2 }}
          onChange={(e) =>
            setUserInput({ ...userInput, password: e.target.value })
          }
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={changePasswordVisability}>
                  {passwordState.showPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className="buttons">
          <button>Create account</button>
          <button onClick={navigateToLoginPage}>
            Already have an account?
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateAccount;
