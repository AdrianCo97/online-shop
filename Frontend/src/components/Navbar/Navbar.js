import "./navbar.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { CartContext } from "../../contexts/CartContext.js";
import Badge from "@mui/material/Badge";

function Navbar() {
  const { productsInCart } = useContext(CartContext);

  const navigate = useNavigate();
  const navigateToShoppingCart = () => {
    navigate("/shoppingcart");
  };

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
        <div className="account-section">
          <Link className="link" to="/login">
            <PersonIcon sx={{ verticalAlign: "middle" }} />
            Login
          </Link>
        </div>
        <div className="cartSection">
          <Badge badgeContent={productsInCart.length} color="success">
            <ShoppingCartIcon
              className="shoppingCart"
              fontSize="medium"
              onClick={() => navigateToShoppingCart()}
            />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
