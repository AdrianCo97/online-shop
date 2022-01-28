import "./navbar.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
  return (
    <div className="background">
      <div className="clothing-category">
        <li>Electronics</li>
        <li>Clothes</li>
        <li>Accessories</li>
      </div>

      <div className="account-category">
        <li>Login</li>
        <ShoppingCartOutlinedIcon fontSize="medium"/>
      </div>
    </div>
  )
}

export default Navbar;