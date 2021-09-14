import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import HeadingWithText from "../utils/HeadingWithText";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "space-evenly",
    justifyContent: "center",
    minHeight: "20vh",
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

  return (
    <Grid container direction="column">    
        <HeadingWithText content={bytes.content} />
        <CardList cardsData={bytes.videoLinks} />
    </Grid>
  );

}

const CardList = ({ cardsData }) => {
  const classes = useStyles();
  return <Grid container className={classes.cardList}>
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
      <Box p={4}>
        <iframe style={{
          borderRadius: "10px",
        }}
          width="auto"
          height="200px"
          src={link}
          title={title}
          frameborder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Box>
    </Grid>

  );
}
