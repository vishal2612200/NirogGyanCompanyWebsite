import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeadingWithText from "../utils/HeadingWithText";
import TeamCardsList from "../utils/TeamCardsList";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    paddingBottom: theme.spacing(4),
    backgroundAttachment: "fixed"
  },
  headerContainer: {
    textAlign: "center",

  },
  message: {
    fontSize: "1rem",
    "&::before": {
      content: "open-quote",
      fontSize: "4rem",
      lineHeight: 0,
      verticalAlign: "bottom",

    },
    "&::after": {
      content: "close-quote",
      paddingTop: "1rem",
      fontSize: "3rem",
      lineHeight: 0,
      verticalAlign: "bottom",
    },
    paddingBottom: "1rem"
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}

));





export default function ExpertTeam({ state: expertTeam }) {
  const classes = useStyles();


  return (
    <Grid container direction="column" className={classes.root}>
      <HeadingWithText content={expertTeam.header} />
      <Grid container item >
        <TeamCardsList content={expertTeam.cardsList} />
      </Grid>
    </Grid>);
}

