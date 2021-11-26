import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HeadingWithText from "../utils/HeadingWithText";
import CardsList2D from "../utils/CardsGrid2D";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }
}))


export default function Services({ state: services }) {

  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root} style={{ backgroundImage: `url(${services.backgroundImage})` }}>
      <HeadingWithText content={services.header} />
      <Grid item style={{ height: "1rem" }}></Grid>
      <CardsList2D cardsList={services.cardsList} />
    </Grid>);
}
