import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to right, #3567D6, #13DED2)",
    alignItems: "center",
    overflow: "hidden",



  },

  headerContainer: {
    textAlign: "center",
  },
  imageBox: {
    position: "absolute",

    [theme.breakpoints.down('sm')]: {
      flexDirection: "column"
    }
  },

  card: {
    width: "250px",
    height: "200px",
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    backgroundColor: "#1242AC",
    borderRadius: "10px",
    color: "#fff",
    padding: "3rem 1rem",
    textAlign: "center",
    margin: "3%",
    border: "2px dashed #fff"
  }
}));

export default function Achievements({ state: achievements }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justifyContent="center" alignItems="center"    >
      <Grid container md={6} justifyContent="space-around" style={{
        backgroundImage: `url(${achievements.backgroundImage.left})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "2.5rem 0",
        backgroundAttachment: "fixed"
      }}>
        {achievements.cardsList.slice(0, 2).map((achievement) => (<Card content={achievement} />))}
      </Grid>
      <Grid container item md={6} justifyContent="space-around" style={{
        backgroundImage: `url(${achievements.backgroundImage.right})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "2.5rem 0"


      }}>
        {achievements.cardsList.slice(2).map((achievement) => (<Card content={achievement} />))}
      </Grid>
    </Grid>
  );
}

const Card = ({ content }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.card} >
      <Typography variant="h4">{content.textBig}</Typography>
      <Typography variant="h6">{content.textSmall}</Typography>
    </Grid>
  );
};
