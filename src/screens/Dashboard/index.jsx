import { Grid, Paper } from "@mui/material";
import styles from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <div>
      <div style={styles.backgroundImg} />
      <div style={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Paper elevation={0} style={styles.card}></Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper elevation={0} style={styles.card}></Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper elevation={0} style={styles.card}></Paper>
          </Grid>
          <Grid item xs={6} md={8}>
            <Paper elevation={0} style={styles.card}></Paper>
          </Grid>
          <Grid item xs={6} md={8}>
            <Paper elevation={0} style={styles.card}></Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper elevation={0} style={styles.card}></Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Dashboard;
