import { Grid, Paper } from "@mui/material";
import Search from "../../components/Search";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import DonutChart from "../../components/DonutChart";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import Statistics from "../../components/Statistics";
import styles from "./Dashboard.styles";

const Dashboard = () => {

  return (
    <div>
      <div style={styles.backgroundImg} />
      <Search />
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
              <LineChart/>
            </Paper>
          </Grid>
          </Grid>
      </div>
    </div>
  );
};
export default Dashboard;
