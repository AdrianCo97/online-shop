import "./navbar.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <div className="background">
      <div className="products-category">
        <Link className="link" to="/electronics">
          Electronics
        </Link>
        <Link className="link" to="/clothes">
          Clothes
        </Link>
        <Link className="link" to="/accessories">
          Accessories
        </Link>
      </div>

      <div className="account-category">
        Login
        <ShoppingCartIcon fontSize="medium" />
      </div>
    </div>
  );
}

export default Navbar;
