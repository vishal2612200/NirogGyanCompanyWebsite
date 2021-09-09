import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "space-evenly",
    justifyContent: "center",
    minHeight: "20vh",
  },
  headingContainer: {
    textAlign: "center",
    padding:"2rem"
  },
  cardList: {
    padding: "1rem auto",
   
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#05152E",
  },
  card: {
    padding: "1rem",
    textAlign: "center",
  }

}));

export default function Bytes({ state: bytes }) {
  const classes = useStyles();

  return (
    <Grid container alignText="center">
      <Grid item container alignItems="center">
        <Grid item md={2}>

        </Grid>
        <Grid item md={8} >
        <Heading content={bytes.content} />
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
      <Grid item container>
        <CardList cardsData={bytes.videoLinks} />
      </Grid>
    </Grid>
  );

}

const Heading = ({ content }) => {
  const classes = useStyles();
  return <Grid item className={classes.headingContainer}>
    <Typography
      variant="h3"
      className={classes.heading}>
      {content.heading}
    </Typography>
    <Typography
      variant="h6"
      color="textSecondary"
      className={classes.description}>
      {content.description}
    </Typography>
  </Grid>

}

const CardList = ({ cardsData }) => {
  const classes = useStyles();
  return <Grid container md={12} className={classes.cardList}>
    {cardsData.map((link, index) => (
      <Card link={link} key={index} />
    ))
    }
  </Grid>
}

const Card = ({ link, title = "YouTube video player" }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.card} md={3} sm={4} >
      <iframe
        width="auto"
        height="inherit"
        src={link}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Grid>

  );
}
