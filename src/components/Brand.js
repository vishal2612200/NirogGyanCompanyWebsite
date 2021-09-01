import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";

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
  },
}));

export default function Brand({ state: brand }) {
  const classes = useStyles();
  const logoImages = brand.trustedBrandsLogoImages;
  const [startingIndex, setStartingIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () => setStartingIndex((state) => ++state % logoImages.length),
      2000
    );
  });
  let images = [];
  const numItemsCarousal = 3;
  for (let i = startingIndex; i < startingIndex + numItemsCarousal; i++) {
    images.push(
      <Grid item>
        <img src={logoImages[i]} alt="img" />
      </Grid>
    );
  }
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.title}>
        <Typography variant="h2" color="textPrimary" className={classes.title}>
          {brand.heading}
        </Typography>
      </Grid>
      <Grid container item className={classes.imagesContainer}>
        {images}
      </Grid>
    </Grid>
  );
}
