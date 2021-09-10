import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeadingWithText from "../utils/HeadingWithText";
import CardsListSimple from "../utils/CardsListSimple";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));



export default function ExpertTeam({ state: expertTeam }) {
  const classes = useStyles();
  return (
    <Grid container direction="column" >
      <HeadingWithText content={expertTeam.content}></HeadingWithText>
      <CardsListSimple cardsList={expertTeam.cardsList}></CardsListSimple>
    </Grid>);
}

