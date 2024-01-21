import { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Search from "../../components/Search";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import DonutChart from "../../components/DonutChart";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import { Colors } from "../../styles/theme";
import Statistics from "../../components/Statistics";
import { isPostalCodeExist, getPostalCodeData } from "../../data/dataUtilities";
import styles from "./Dashboard.styles";

const Dashboard = () => {
  const [searchResults, setSearchResults] = useState("");

  const handleEnterPressed = (value) => {
    const postalCode = isPostalCodeExist(value);
    if (postalCode) {
      setSearchResults(`Results for postal code ${value.toUpperCase()}`);
      getPostalCodeData(value);
    } else { 
      setSearchResults(`No results exist for the postal code ${value.toUpperCase()} you entered.`);
    }
  };

  return (
    <div>
      <div style={styles.backgroundImg} />
      <Search onEnterPressed={handleEnterPressed} />
      {searchResults && (
        <Typography variant="h5" color={Colors.navyBlue}>
          {searchResults}
        </Typography>
      )}
      <div style={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Paper elevation={0} style={styles.card}>
              <Statistics />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={0} style={styles.card}>
              <HorizontalBarChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={0} style={styles.card}>
              <DonutChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} style={styles.card}>
              <BarChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} style={styles.card}>
              <LineChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
