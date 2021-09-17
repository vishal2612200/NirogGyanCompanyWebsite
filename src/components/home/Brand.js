import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Button, Typography } from "@material-ui/core";
import HeadingWithText from "../utils/HeadingWithText";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1.5rem 0"
  },
  whatsapp: {
    padding: "0 1rem"
  },
  image: {
      maxWidth: "100%",
      maxHeight: "100%"

  }
}));

export default function Brand({ state: brand }) {
  const classes = useStyles();
  const logoImages = brand.trustedBrandsLogoImages;

  return (
    <Grid container className={classes.root} direction="column" justifyContent="center" alignItems="center">
      <Grid container item justifyContent="flex-end">
        <Grid item className={classes.whatsapp}>
          <Button aria-label="whatsapp" >
            <img src={brand.whatsapp} alt="whatsapp" />
          </Button>
        </Grid>

      </Grid>

      <HeadingWithText content={brand.header} />
      <Grid container item justifyContent="space-evenly" alignItems="center" md={10}>
        {logoImages.map(item =>
          <Grid item md={3} style={{textAlign:"center"}}>
            <img src={item} alt="logo" className={ classes.image}/>
          </Grid>
        )}
      </Grid>
      <Grid item>
        <Box p={3} />
      </Grid>
    </Grid>
  );
}
