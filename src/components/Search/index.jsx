import { useState } from "react"
import { TextField, Button, Grid } from "@mui/material";

const Search = () => { 
  const [text, setText] = useState(""); 

  const handleInputChange = (event) => {
    setText(event.target.value); 
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField
          label="Enter Postal Code..."
          variant="outlined"
          fullWidth
          value={text}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" className="postal-search-btn">
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
export default Search;