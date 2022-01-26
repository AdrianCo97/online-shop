import { AppBar, Box, Toolbar, Button } from "@mui/material";
import "./navbar.css";

function Navbar() {
  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar sx={{ justifyContent: 'space-between'}}>
          <Box sx={{ justifyContent: 'space-evenly' }}>
            <Button size="large" color="inherit">Male</Button>
            <Button size="large" color="inherit">Female</Button>
            <Button size="large" color="inherit">Children</Button> 
          </Box>
          <Button size="large" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;