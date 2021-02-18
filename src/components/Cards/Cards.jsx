import { Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CardComponent from "./Card/CardComponent";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading..";
  }
  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        Global
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          title="Infected"
          subtitle="Number of cases"
          className={styles.infected}
          value={confirmed.value}
          lastUpdate={lastUpdate}
        />
        <CardComponent
          title="Recovered"
          subtitle="Number of recoveries"
          className={styles.recovered}
          value={recovered.value}
          lastUpdate={lastUpdate}
        />

        <CardComponent
          title="Deaths"
          subtitle="Number of deaths"
          className={styles.deaths}
          value={deaths.value}
          lastUpdate={lastUpdate}
        />
      </Grid>
    </div>
  );
};

export default Cards;
