import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to right, #3567D6, #13DED2)",
    padding: "1.5rem",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "3%"
  },

  headerContainer: {
    textAlign: "center",
  },

  card: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    backgroundColor: "#1242AC",
    borderRadius: "10px",
    color: "#fff",
    padding: "3rem",
    textAlign: "center",
    margin: "3%",
    border: "2px dashed #fff"
  }
}));

const Card = ({ content }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={2} className={classes.card}>     
        <Typography variant="h4">{content.textBig}</Typography>
        <Typography variant="h6">{content.textSmall}</Typography>
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
