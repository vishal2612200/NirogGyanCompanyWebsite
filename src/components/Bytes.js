import React from "react";
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
  },
  cardList: {
    
    padding: "1rem auto",
    margin: "1rem auto",
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
    <Grid container direction="column" className={classes.root}>
      <Heading content={bytes.content} />
      <CardList cardsData={bytes.videoLinks} />
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
  return <Grid container item className={classes.cardList}>
    {cardsData.map((link, index) => (
      <Card link={link} key={index} />
    ))
    }
  </Grid>
}

const Card = ({ link, title = "YouTube video player" }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.card} sm={4}>
      <iframe
        style={{ borderRadius: "20px" }}
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
