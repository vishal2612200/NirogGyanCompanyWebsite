import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useTransition } from "react-spring";


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
    marginBottom: "4%"
  },
  imagesContainer: {
    justifyContent: "space-evenly",
    overflowX: "hidden"
  },
}));

export default function Brand({ state: brand }) {
  const classes = useStyles();
  const logoImages = brand.trustedBrandsLogoImages;
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
      <Grid item md={3} sx={{ marginRight: "10px"}} key={i}>
        <img width="90%" src={logoImages[i]} alt="client logo" />
      </Grid>
    );
  }

  return (
    <Grid container className={classes.root}>
      <Grid item md={1}></Grid>
      <Grid item md={10} className={classes.title}>
        <Grid item>
        <Typography variant="h3" color="textPrimary" className={classes.title}>
          {brand.heading}
        </Typography>
        </Grid>
        
        <Grid item container display={{ sm: 'grid'}} >
          {images}
        </Grid>
      </Grid>
      <Grid item md={1}></Grid>
    </Grid>
  );
}
