import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import HeadingWithText from "../utils/HeadingWithText";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1.5rem 0"
  },
  whatsapp: {
    position: "fixed",
    right: "0",
    top: "50%",
    zIndex: "1000",
    [theme.breakpoints.down("sm")]: {
      width: "80px",
    }
  }
}));

export default function Brand({ state: brand }) {
  const classes = useStyles();
  const logoImages = brand.trustedBrandsLogoImages;

  return (
    <Grid container className={classes.root} direction="column" justifyContent="center" alignItems="center">

      <Grid container item justifyContent="space-around">

        <HeadingWithText content={brand.header} />
        <img src={brand.whatsapp} alt="whatsapp" className={classes.whatsapp} />

      </Grid>
      <Grid container item justifyContent="space-evenly" alignItems="center" md={10}>
        {logoImages.map(item =>
          <Grid item md={3} style={{ textAlign: "center" }}>
            <img src={item} alt="logo" className={classes.image} />
          </Grid>
        )}
      </Grid>
      <Grid item>
        <Box p={3} />
      </Grid>
    </Grid>
  );
}
