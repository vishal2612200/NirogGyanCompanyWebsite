import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import clsx from 'clsx';
import "../component.css"
import Card from "../utils/FeatureCard"
import BigRightImageSection from "../utils/BigRightImageSection";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "3rem"
  },
  header: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
    "&>*": { marginBottom: "1rem" },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    }
  },
  contentLeft: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    borderRadius: "10px",
  },
  cardsList: {
    marginTop: "2rem",
  },

  card: {
    border: "1px solid #B8BBBD",
    marginBottom: "2rem"

  },
  textBox: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    padding: "1rem",
    textWrap: "word-break",
    alignItems: "flex-end",
  }

})
);

export default function Market({ state: market }) {

  const classes = useStyles();

  return (
    <Grid container className={clsx(classes.root)} justifyContent="center" alignItems="center">
      <BigRightImageSection
        contentLeft={<ContentLeft content={market.contentLeft} />}
        image={{
          imagePath: market.contentRight.imagePath, altText: "feature"
        }} />
    </Grid>
  );
}


const ContentLeft = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column"  className={classes.contentLeft} justifyContent="flex-end" alignItems="center">
    <Grid item md={9}>
      <Header content={content.header} />
      <CardsList content={content.cardsList} />
    </Grid>
  </Grid>
}

const Header = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column" className={classes.header} justifyContent="space-evenly">
    <Grid item key={0}>
      <Typography variant="h3" color="textPrimary">
        {content.heading}
      </Typography>
    </Grid>
    {content.description.map(({ text }, index) => <Grid item key={index} >
      <Typography variant="h6" color="textSecondary">
        {text}
      </Typography>
    </Grid>
    )}

  </Grid>
}



const CardsList = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column" justifyContent="space-evenly" className={classes.cardsList}>
    {content.map(({ imagePath, textThin, textBold }, index) => (<Card {...{ imagePath, textThin, textBold }} key={index} />))}
  </Grid>


}


const ContentRight = ({ content }) => {
  const classes = useStyles();

  return <Grid item xs={12} md={6} className={classes.contentRight}>
    <img src={content.imagePath} alt="doctor" />
  </Grid>
}






