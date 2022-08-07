import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./createAccount.css";

function CreateAccount() {
  return (
    <form className="create-account-box">
      <div className="header">
        <h2>Create Account</h2>
      </div>
      <div className="body">
        <TextField label="firstname" sx={{ mb: 2 }} />
        <TextField label="lastname" sx={{ mb: 2 }} />
        <TextField label="email" sx={{ mb: 2 }} />
        <TextField label="password" type="password" sx={{ mb: 2 }} />
        <div className="buttons">
          <button>Create account</button>
          <button>Already have an account?</button>
        </div>
      </div>
    </form>
  );
}

export default CreateAccount;
