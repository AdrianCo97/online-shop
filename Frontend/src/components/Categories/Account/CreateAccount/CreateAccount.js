import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./createAccount.css";


function CreateAccount() {
    return (
        <form className="create-account-box">
            <p>Create Account</p> 
            <div className="header">
      <h2>Login</h2>
      </div>
      <div className="body">
        <div className="buttons">
          <button className="submit-button">Login</button>
          <button>Already have an account?</button>
        </div>
      </div>
        </form>
    )
}

export default CreateAccount;