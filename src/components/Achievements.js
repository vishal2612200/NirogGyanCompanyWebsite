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
    padding: "2rem"
  },
  card: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    backgroundColor: "#1242AC",
    borderRadius: "10px",
    color: "#fff",
    padding: "2rem 1rem",
    textAlign: "center",
  }
}));

const Card = ({ content: { textBig, textSmall } }) => {
  const classes = useStyles();
  return (
    <Grid item direction="column" className={classes.card}>
      <Typography variant="h4">{textBig}</Typography>
      <Typography variant="h6">{textSmall}</Typography>
    </Grid>
  );
};

export default function Achievements({ state: achievements }) {
  const classes = useStyles();

  return (
    <Grid container justifyContent="space-evenly" className={classes.root}>
      <Grid container justifyContent="space-evenly" className={classes.root}>
      
      </Grid>
      {achievements.cardsData.map((achievement) => (<Card content={achievement} />))}
    </Grid>
  );
}
