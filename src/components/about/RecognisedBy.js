import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import HeadingWithText from "../utils/HeadingWithText";

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "4rem",
    paddingBottom:"8rem"
  }
}));

export default function RecognisedBy({ state: recognisedBy }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <HeadingWithText content={recognisedBy.header} />
      <Grid container item className={classes.imagesContainer}  justifyContent="space-evenly">
        {recognisedBy.trustedBrandsLogoImages.map((item, index) => <Grid item key={index}><img src={item} alt="client logo" /></Grid>)}
      </Grid>
    </Grid>
  );
}
