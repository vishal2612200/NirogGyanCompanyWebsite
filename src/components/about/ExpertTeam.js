import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeadingWithText from "../utils/HeadingWithText";
import CardsList from "../utils/CardsList";

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
      <CardsList cardsList={expertTeam.cardsList}></CardsList>
    </Grid>);
}

