import { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./createAccount.css";

function CreateAccount() {

  const [passwordState, setPasswordState] = useState({
    password: "",
    showPassword: false,
  });

  const navigate = useNavigate();
  const navigateToLoginPage = () => {
    navigate("/login");
  };

  const changePasswordVisability = () => {
    if(!passwordState.showPassword){
        setPasswordState({...passwordState, showPassword: true});
    }
    else{
        setPasswordState({...passwordState, showPassword: false})
    }
  }

  return (
    <form className="create-account-box">
      <div className="header">
        <h2>Create Account</h2>
      </div>
      <div className="body">
        <TextField label="firstname" sx={{ mb: 2 }} />
        <TextField label="lastname" sx={{ mb: 2 }} />
        <TextField label="email" sx={{ mb: 2 }} />
        <TextField
          label="password"
          type={passwordState.showPassword ? "text" : "password"}
          sx={{ mb: 2 }}
          autoComplete="off"
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
