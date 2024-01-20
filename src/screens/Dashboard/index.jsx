import { Grid, Paper, Typography } from "@mui/material";
import Search from "../../components/Search";
import { Colors } from "../../styles/theme"
import styles from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <div>
      <div style={styles.backgroundImg} />
      <Search />
      <div style={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} style={styles.card}>
              <Typography color={Colors.navyBlue} variant="h4">
                Chart
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} style={styles.card}></Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} style={styles.card}></Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} style={styles.card}></Paper>
          </Grid>
          </Grid>
      </div>
    </div>
  );
};
export default Dashboard;
