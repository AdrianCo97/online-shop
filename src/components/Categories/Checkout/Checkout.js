import Navbar from "../../Navbar/Navbar";
import TextField from '@mui/material/TextField';

function Checkout() {
  return (
    <div>
      <Navbar />
      <form>
        <TextField label="First Name" variant="outlined" />
        <TextField label="Last Name" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <TextField label="Phone" variant="outlined" />
        <TextField label="Address" variant="outlined" />
        <TextField label="City" variant="outlined" />
      </form>
    </div>
  );
}

export default Checkout;
