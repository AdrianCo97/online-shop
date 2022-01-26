import "./navbar.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
  return (
    <div class="background">
      <div class="clothing-category">
        <li>Male</li>
        <li>Female</li>
        <li>Child</li>
      </div>

      <div class="account-category">
        <li>Login</li>
        <ShoppingCartOutlinedIcon fontSize="medium"/>
      </div>
    </div>
  )
}

export default Navbar;