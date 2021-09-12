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
  },
  card: {
  },
  evenCard: {
    flexDirection: "row"
  },
  oddCard: {

    flexDirection: "row-reverse"
  },
  textContainer: {
    borderLeft: "3px dashed #grey",

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
  return <Grid container item direction="column" justifyContent="space-evenly" >
    {
      cardsList.map(({ imagePath, heading, description }, index) => {
        return <Card {...{ imagePath, heading, description }} className={clsx(
          index % 2 === 0 ? classes.evenCard : classes.oddCard,
          classes.card)} />
      })
    }
  </Grid>
}



const Card = ({ imagePath, heading, description, ...props }) => {
  const classes = useStyles();

  return (
    <Grid container item className={classes.card} {...props}>
      <Grid container item xs={4}>
        <Grid item style={{ borderRadius: "50%", background: "#3567D6" }}>
          <img src={imagePath} alt="doctor" />
        </Grid>
      </Grid>
      <Grid container item xs={4} className={classes.textContainer}>

        <Grid item  style={{ height: "min-content", borderBottom: "3px dashed gray" }} >
          <Typography variant="h6" color="textPrimary">
            {heading}
          </Typography>
          <Typography variant="h5" color="textSecondary" >
            {description}
          </Typography>
        </Grid>
      </Grid>
      <Grid item md={2} ></Grid>

    </Grid>
  )
}


