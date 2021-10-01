import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeadingWithText from "../utils/HeadingWithText";
import CardsListSimple, {TeamCard} from "../utils/CardsListSimple";
import { useMediaQuery, useTheme } from "@material-ui/core"

import CarousalWithArrowsOnDesktop from "../utils/CarousalWithArrowsOnDesktop"

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    paddingBottom: theme.spacing(4),
    backgroundAttachment: "fixed"
  },
  headerContainer: {
    textAlign: "center",

  },
  message: {
    fontSize: "1rem",
    "&::before": {
      content: "open-quote",
      fontSize: "4rem",
      lineHeight: 0,
      verticalAlign: "bottom",

    },
    "&::after": {
      content: "close-quote",
      paddingTop: "1rem",
      fontSize: "3rem",
      lineHeight: 0,
      verticalAlign: "bottom",
    },
    paddingBottom: "1rem"
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}

));





export default function ExpertTeam({ state: expertTeam }) {
  const classes = useStyles();


return (
  <Grid container direction="column" className={classes.root}>
    <HeadingWithText content={expertTeam.header}></HeadingWithText>
    <Grid container item  >
      <CardsList content={expertTeam.cardsList}></CardsList>
    </Grid>
  </Grid>);
}


const CardsList = ({ content }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  let numberOfSlides = 4;
  if (isSmallScreen)
    numberOfSlides = 1;
  else if (isMediumScreen)
    numberOfSlides = 2;
  else
    numberOfSlides = 4;

  return <Grid container className={classes.cardList} item justifyContent="center" alignItems="center">
    <CarousalWithArrowsOnDesktop card={<TeamCard />} content={content} dotsOnDeskTop={true} numberOfSlides={numberOfSlides}></CarousalWithArrowsOnDesktop>
  </Grid>
}


