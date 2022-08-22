import { useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./createAccount.css";

function CreateAccount() {

  const url = "http://localhost:5000"

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

  const createAccount = async () => {
    await fetch(`${url}/api/auth/register`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userInput)
    });
  }

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
    <form className="create-account-box" onSubmit={createAccount}>
      <div className="header">
        <h2>Create Account</h2>
      </div>
      <div className="body">
        <TextField required
          label="firstname"
          variant="filled"
          sx={{ mb: 2 }}
          onChange={(e) =>
            setUserInput({ ...userInput, firstname: e.target.value })
          }
        />
        <TextField required
          label="lastname"
          variant="filled"
          sx={{ mb: 2 }}
          onChange={(e) =>
            setUserInput({ ...userInput, lastname: e.target.value })
          }
        />
        <TextField required
          label="email"
          variant="filled"
          sx={{ mb: 2 }}
          onChange={(e) =>
            setUserInput({ ...userInput, email: e.target.value })
          }
        />
        <TextField required
          label="password"
          variant="filled"
          type={passwordState.showPassword ? "text" : "password"}
          sx={{ mb: 2 }}
          onChange={(e) =>
            setUserInput({ ...userInput, password: e.target.value })
          }
          autoComplete="off"
          inputProps={{minLength: 5, maxLength: 30}}
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
          <Button type="submit" sx={{width: 300, mb: 1}} variant="contained" onClick={createAccount}>Create account</Button>
          <Button sx={{width: 300}} variant="contained" onClick={() => navigate("/login")}>Already have an account?</Button>
        </div>
      </div>
    </form>
  );
}

export default CreateAccount;
