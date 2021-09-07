import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useSpring, animated, useTransition } from "react-spring";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  imagesContainer: {
    justifyContent: "space-evenly",
    overflowX: "hidden"
  },
}));

export default function RecognisedBy({ state: recognisedBy }) {
  const classes = useStyles();
  const logoImages = recognisedBy.trustedBrandsLogoImages;
  const [startingIndex, setStartingIndex] = useState(0);

  const styles = useTransition(startingIndex, {
    key: startingIndex,
    loop: true,
    to: { opacity: 0 },
    from: { opacity: 1 },
    config: { duration: 4000 },
  });

  let images = [];
  const numItemsCarousal = 3;

  for (let i = 0; i < logoImages.length; i++) {
    images.push(
      <Grid item key={i}>
        <img src={logoImages[i]} alt="client logo" />
      </Grid>
    );
  }

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.title}>
        <Typography variant="h2" color="textPrimary" className={classes.title}>
          {recognisedBy.heading}
        </Typography>
      </Grid>
      <Grid container item className={classes.imagesContainer}>
        {images}
      </Grid>
    </Grid>
  );
}
