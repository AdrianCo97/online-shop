import "./navbar.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Clothes from "../Categories/Clothes/Clothes.js";
import Electronics from "../Categories/Electronics/Electronics.js";
function Navbar() {
  return (
    <div className="background">
      <div className="clothing-category">
        <Link to="/electronics">
          <li>Electronics</li>
        </Link>
        <Link to="/clothes">
          <li>Clothes</li>
        </Link>
        <li>Accessories</li>
      </div>

      <div className="account-category">
        <li>Login</li>
        <ShoppingCartOutlinedIcon fontSize="medium" />
      </div>
    </div>
  );
}

export default Navbar;
