import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: "linear-gradient(to right, #3567D6, #13DED2)",
    padding: "1.5rem",
    justifyContent: "space-around",
    alignItems: "center"
  },

  headerContainer: {
    textAlign: "center",

  },
  cardContainer: {
    padding:"1.5rem",
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  card: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    backgroundColor: "#1242AC",
    borderRadius: "10px",
    color: "#fff",
    padding: "3rem",
    textAlign: "center",
  }
}));

const Card = ({ content }) => {
  const classes = useStyles();
  return (
    <Grid container item xs={6} md={3} className={classes.cardContainer}>
      <Grid item className={classes.card}>
        <Typography variant="h4">{content.textBig}</Typography>
        <Typography variant="h6">{content.textSmall}</Typography>
      </Grid>
    </Grid>
  );
};

export default function Achievements({ state: achievements }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {achievements.cardsData.map((achievement) => (<Card content={achievement} />))}
    </Grid>
  );
}
