import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBar.styles";

const Search = ({ onSearch }) => { 
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <TextField
      fullWidth
      sx={{
        ...styles.SearchBar_root,
      }}
      variant="outlined"
      placeholder={"Search using postal code..."}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
        sx: {
          ...styles.SearchBar_inputProps,
        },
      }}
      onChange={handleInputChange}
    />
  );
}
export default Search;