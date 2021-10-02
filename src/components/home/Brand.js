import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import HeadingWithText from "../utils/HeadingWithText";
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { useMediaQuery, useTheme } from "@material-ui/core"

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
  const logoImages = brand.trustedBrandsLogoImages;
  const isSmallScreen = useSmallScreen();
  const { whatsapp, altText = "logo-default" } = brand.whatsapp;
  return (
    <Grid container className={classes.root} direction="column" justifyContent="center" alignItems="center">

      <Grid container item justifyContent="space-around">

        <HeadingWithText content={brand.header} />
        {!isSmallScreen ? <a href={brand.whatsappurl} target="_blank"><img src={brand.whatsapp} alt="whatsapp" className={classes.whatsapp} /></a> : ""}

      </Grid>

      <Carousel
        plugins={[
          'infinite',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: isSmallScreen ? 1 : 4
            }
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 1000,
            }
          },
        ]}
        animationSpeed={1000}
      >
        {logoImages.map(({ imagePath, altText = "logo-default" }, index) =>
          <img key={index} src={imagePath} alt={altText} width="289" height="131" style={{ filter:"grayscale(100%)"}}/>
        )}
      </Carousel>
      <Grid item >
        <Box p={2}></Box>
      </Grid>
    </Grid>
  );
}
function useSmallScreen() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return isSmallScreen;
}