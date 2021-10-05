import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import CarousalInfiniteAutomatic from "../utils/CarousalInfiniteAutomatic";
import { useSmallScreen } from "../customHooks";
import HeadingWithText from "../utils/HeadingWithText";
import '@brainhubeu/react-carousel/lib/style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1.5rem 0"
  },
  whatsapp: {
    position: "fixed",
    right: "0",
    top: "80%",
    zIndex: "1000",
    width: "80px",
  },
  card: {
    padding: "2rem 0",
    margin: "1rem",
    textAlign: "center",
  }
}));

export default function Brand({ state: brand }) {
  const classes = useStyles();
  const isSmallScreen = useSmallScreen();
  const { image: { imagePath, altText = "logo-default" }, url } = brand.whatsapp;
  return (
    <Grid container className={classes.root} direction="column" justifyContent="center" alignItems="center">

      <Grid container item justifyContent="space-around">
        <HeadingWithText content={brand.header} />
        {
          !isSmallScreen ?
            <a href={url} rel="noreferrer" target="_blank">
              <img loading="lazy" src={imagePath} alt={altText} className={classes.whatsapp} />
            </a> : ""
        }

      </Grid>

      <CarousalInfiniteAutomatic logoImages={brand.trustedBrandsLogoImages} />
      <Grid item >
        <Box p={2}></Box>
      </Grid>
    </Grid>
  );
}