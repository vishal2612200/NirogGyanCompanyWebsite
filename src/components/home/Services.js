import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HeadingWithText from "../utils/HeadingWithText";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
  },
  cardList: {
    justifyContent: "center",
    // alignItems: "stretch",
  },

  serviceCard: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    borderRadius: "15px",
    alignContent: "center",
    border: "1px solid #B8BBBD",
    margin: "2rem",
    boxShadow: "39px 11px 83px -53px #B8BBBD",
    "&__logo-box": {
      textAlign: "center",
      textWrap: "word-break",
      padding: "1rem"
    },
    "&__heading": {
      textAlign: "center",
    },
    "&__content": {
      padding: "1rem",
      textAlign: "center",
    }
  }
}

));


export default function Services({ state: services }) {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root} style={{ backgroundImage: `url(${services.backgroundImage})` }}>
      <HeadingWithText content={services.content}></HeadingWithText>
      <Grid item style={{ height: "1rem" }}></Grid>
      <CardList cardsData={services.servicesList}></CardList>
    </Grid>);
}

const CardList = ({ cardsData }) => {
  const classes = useStyles();
  return <Grid container item className={classes.cardList} >
    {cardsData.map(({ imgPath, heading, content }, index) => (
      <Card {...{ imgPath, heading, content }} key={index} />
    ))
    }
  </Grid>
}

const Card = ({ imgPath, heading, content }) => {

  const classes = useStyles();

  return (
    <Grid container item direction="column" className={classes.serviceCard} xs={12} sm={6} md={4} lg={3}  >
      <Grid item className={`${classes.serviceCard}__logo-box`} >
        <img src={imgPath} alt="service" />
        <Typography variant="h5">{heading}</Typography>
      </Grid>

      <Grid item className={`${classes.serviceCard}__content`}>
        <Typography variant="body1" color="textSecondary">{content}</Typography>
      </Grid>
    </Grid>

  );
}


