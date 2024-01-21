import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import AirIcon from "@mui/icons-material/Air";
import CloudIcon from "@mui/icons-material/Cloud";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import styles from "./SideBar.styles";

const SideBar = () => {
  return (
    <div style={styles.container}>
      <Grid container spacing={8} mt={1} flexDirection={"column"}>
        <Grid item>
          <Link to="/">
            <HomeIcon />
          </Link>
        </Grid>
        <Grid item>
          <PlaceIcon />
        </Grid>
        <Grid item>
          <AirIcon />
        </Grid>
        <Grid item>
          <Link to="/environmentsafety">
            <CloudIcon />
          </Link>
        </Grid>
        <Grid item>
          <PedalBikeIcon />
        </Grid>
        <Grid item>
          <EmojiPeopleIcon />
        </Grid>
        <Grid item>
          <DirectionsCarIcon />
        </Grid>
      </Grid>
    </div>
  );
};
export default SideBar;

