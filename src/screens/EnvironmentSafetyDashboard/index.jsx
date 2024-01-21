import { Grid, Paper } from "@mui/material";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import Statistics from "../../components/Statistics";
import styles from "./Environment.styles";

const Location = () => {

  return (
    <div>
      <div style={styles.backgroundImg} />
      <div style={styles.container}>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Paper elevation={0} style={styles.title}>
              Environmental Data
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper elevation={0} style={styles.card_one}>
              <Statistics />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper elevation={0} style={styles.card_two}>
              <HorizontalBarChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Location;
