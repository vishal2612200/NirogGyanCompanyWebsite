import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import HeadingWithText from "../utils/HeadingWithText";
// import { useMediaQuery, useTheme } from "@material-ui/core"
import CarousalInfiniteAutomatic from "../utils/CarousalInfiniteAutomatic";

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

  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (

    <Grid container className={classes.root} direction="column" justifyContent="center" alignItems="center">

      <HeadingWithText content={recognisedBy.header} />
      <CarousalInfiniteAutomatic logoImages={recognisedBy.trustedBrandsLogoImages} />

      <Grid item >
        <Box p={2}></Box>
      </Grid>
    </Grid>




  );
}
