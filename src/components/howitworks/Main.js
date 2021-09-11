import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, Divider, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import HeadingWithText from "../utils/HeadingWithText";

import clsx from 'clsx';
import "../component.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
    textWrap: "word-break"
  },
  heading: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    }
  }
  

})
);

export default function Main({ state: main }) {

  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="center">
      <HeadingWithText content={main.header} />
      <Box p={2}>
        <CardsList cardsList={main.cardsList}></CardsList>
      </Box>
    </Grid>
  );
}





const CardsList = ({ cardsList }) => {
  const classes = useStyles();
  return <Grid container item direction="column" justifyContent="space-evenly" className={clsx("cardsList")}>
    {
      cardsList.map(({ imagePath, heading, description }) => {
        return <Card {...{ imagePath, heading, description }} />
      })
    }
  </Grid>
}



const Card = ({ imagePath, heading, description, ...props }) => {
  const classes = useStyles();

  return (
    <Grid container item className={classes.card} {...props}>
      <Grid container item xs={6}>
        <Grid item style={{ borderRadius: "50%", background: "#3567D6" }}>
          <img src={imagePath} alt="doctor" />
        </Grid>
      </Grid>
      <Grid item xs={4} style={{ height: "fit-content", borderBottom: "3px dashed gray" }} >
        <Typography variant="h6" color="textPrimary">
          {heading}
        </Typography>
        <Typography variant="h5" color="textSecondary" >
          {description}
        </Typography>
      </Grid>
      <Grid item md={2} ></Grid>

    </Grid>
  )
}


