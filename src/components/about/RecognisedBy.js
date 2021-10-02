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
        {Object.entries(logoImages).map((item,index) =>
          <a href={item[1][1]} target="_blank"><img width="95%" key={index} src={item[1][0]} alt="logo" /></a>
        )}
      </Carousel>
      <Grid item >
        <Box p={2}></Box>
      </Grid>
    </Grid>



















    // <Grid container className={classes.root}>
    //   <HeadingWithText content={recognisedBy.header} />

    //   <Grid container item className={classes.imagesContainer} justifyContent="space-evenly">
    //     {recognisedBy.trustedBrandsLogoImages.map((item, index) => <Grid item key={index}><img src={item} alt="client logo" /></Grid>)}
    //   </Grid>
    // </Grid>
  );
}
