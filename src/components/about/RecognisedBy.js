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
  card: {
    padding: "2rem 0",
    margin: "1rem",
    textAlign: "center",
  }
}));


export default function RecognisedBy({ state: recognisedBy }) {
  const classes = useStyles();
  const logoImages = recognisedBy.trustedBrandsLogoImages;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (

    <Grid container className={classes.root} direction="column" justifyContent="center" alignItems="center">

      <HeadingWithText content={recognisedBy.header} />

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
        {logoImages.map(({ imagePath, altText = "logo-default", link }, index) =>
          <a href={link} rel="noreferrer" target="_blank"><img loading="lazy" loading="lazy" src={imagePath} alt={altText} key={index} width="95%" style={{ filter: "grayscale(100%)" }} /></a >
        )}
      </Carousel>
      <Grid item >
        <Box p={2}></Box>
      </Grid>
    </Grid>




  );
}
