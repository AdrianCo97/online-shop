import "./navbar.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { CartContext } from "../../contexts/CartContext.js";
import { UserContext } from "../../contexts/UserContext.js";
import Badge from "@mui/material/Badge";
import { Menu, MenuItem } from "@mui/material";

function Navbar() {
  const { productsInCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [menu, setMenu] = useState({
    anchorElement: null,
    open: false,
  });

  const navigate = useNavigate();
  const navigateToShoppingCart = () => {
    navigate("/shoppingcart");
  };

  const openMenu = (e) => {
    setMenu({ open: true, anchorElement: e.currentTarget });
  };

  const closeMenu = () => {
    setMenu({ open: false, anchorElement: null });
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
          {user.isLoggedIn ? (
            <p className="link" onClick={openMenu}>
              {user.user.firstname}
            </p>
          ) : (
            <Link className="link" to="/login">
              <PersonIcon sx={{ verticalAlign: "middle" }} />
              Login
            </Link>
          )}
          <Menu
            anchorEl={menu.anchorElement}
            open={menu.open}
            anchorOrigin={{ horizontal: "center", vertical: "bottom"}}
            transformOrigin={{ horizontal: "center", vertical: "top"}}
            onClose={closeMenu}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
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
