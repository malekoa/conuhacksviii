import Dashboard from "./screens/Dashboard";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./App.css"; // Import your CSS file

function App() {
  const [text, setText] = useState(""); // State to store the entered text

  const handleInputChange = (event) => {
    setText(event.target.value); // Update the 'text' state when the input changes
  };

  return (
    <div>
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
      <Dashboard />
    </div>
  );
}

export default App;
