import "./navbar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../contexts/CartContext.js";
import Badge from "@mui/material/Badge";

function Navbar() {
  const { productsInCart } = useContext(CartContext);

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
        <div className="cartSection">
          <Badge badgeContent={productsInCart} color="success">
            <ShoppingCartIcon fontSize="medium" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
