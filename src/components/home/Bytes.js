import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import HeadingWithText from "../utils/HeadingWithText";
import Slide from '@material-ui/core/Slide';
import { useInView } from "react-intersection-observer"

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
    padding: "2rem 0",
    margin: "1rem",
    textAlign: "center",
  },
  videoWrapper: {
    //moreInfo: https://css-tricks.com/fluid-width-video/#iframe-video-youtube-vimeo-etc
    position: "relative",
    paddingBottom: "56.25%",
    height: "0",
    "&>iframe": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }
  }
}));

export default function Bytes({ state: bytes }) {

  return (
    <Grid container direction="column">
      <HeadingWithText content={bytes.header} />
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
  const [ref, inView] = useInView({
    threshold: 0.2,
  })

  return (
    <Grid item className={classes.card}   ref={ref}>
      <Slide direction="up" in={inView} mountOnEnter unmountOnExit>
        <span>
        <iframe style={{
          borderRadius: "10px",
        }}
          width="auto"
          height="inherit"
          src={link}
          title={title}
          frameborder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </span>
      </Slide>
    </Grid>

  );
}
