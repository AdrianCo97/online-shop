import Navbar from "../../Navbar/Navbar";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function Checkout() {
  return (
    <div>
      <Navbar />

      <Grid container spacing={3}>
        <Grid item>
          <TextField
            size="small"
            fullWidth
            label="First Name"
            variant="outlined"
            margin="dense"
          />
        </Grid>
        <Grid item >
          <TextField
            size="small"
            fullWidth
            label="Last Name"
            variant="outlined"
            margin="dense"
          />
        </Grid>
        <Grid item>
          <TextField
            size="small"
            fullWidth
            label="Email"
            variant="outlined"
            margin="dense"
          />
        </Grid>
        <Grid item>
          <TextField
            size="small"
            fullWidth
            label="Phone"
            variant="outlined"
            margin="dense"
          />
        </Grid>
        <Grid item>
          <TextField
            size="small"
            fullWidth
            label="Address"
            variant="outlined"
            margin="dense"
          />
        </Grid>
        <Grid item>
          <TextField
            size="small"
            fullWidth
            label="City"
            variant="outlined"
            margin="dense"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Checkout;
