import React from "react";
import { List, ListItem, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./SideBar.css";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import AirIcon from "@mui/icons-material/Air";
import CloudIcon from "@mui/icons-material/Cloud";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const SideBar = () => {
  return (
    <div className="sidebar-background">
      <div>
        <List>
          <ListItem>
            <ListItemIcon>
              <br />
              <br />
              <br />
              <br />
              <HomeIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <br />
              <br />
              <br />
              <br />
              <PlaceIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <br />
              <br />
              <br />
              <br />
              <AirIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              {/* Use Link to navigate to the new dashboard */}
              <br />
              <br />
              <br />
              <br />
              <Link to="/environmentsafety">
                <CloudIcon />
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <br />
              <br />
              <br />
              <br />
              <PedalBikeIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <br />
              <br />
              <br />
              <br />
              <EmojiPeopleIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <br />
              <br />
              <br />
              <br />
              <DirectionsCarIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default SideBar;
