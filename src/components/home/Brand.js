import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Button, Typography } from "@material-ui/core";
// import HeadingWithText from "../utils/HeadingWithText";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1.5rem 0"
  },
  whatsapp: {
    padding: "0 1rem"
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

      <Grid container item xs={10} >
        <Grid item container justifyContent="center">
          <Typography variant="h3" color="textPrimary" className={classes.title}>
            {brand.header.heading }
          </Typography>
      
        </Grid>
        <Grid item container style={{marginTop:"5%"}} justifyContent="center">
          {logoImages.map(item =>
            <Grid item md={3}><img width="100%" src={item} alt="logo" /></Grid>
          )}
        </Grid>
        <Grid item>
          <Box p={3} />
        </Grid>
      </Grid>
    </Grid>
  );
}
