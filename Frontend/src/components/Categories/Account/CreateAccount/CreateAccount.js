import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./createAccount.css";

function CreateAccount() {
  return (
    <form className="create-account-box">
      <div className="header">
        <p>Create Account</p>
      </div>
      <div className="body">
        <div className="buttons">
          <button>Create account</button>
          <button>Already have an account?</button>
        </div>
      </div>
    </form>
  );
}

export default CreateAccount;
