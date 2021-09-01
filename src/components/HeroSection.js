import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: "linear-gradient(to right, #52BBE8, #69C3EB, #A3D8F1, #E1EFF8)",
    marginTop: "0.5rem",  },
  title: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
    fontWeight: "700",
  },
  text: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
  },
  watchVideoButton: {
    backgroundColor: "transparent",
    textTransform: "none",

    "&:hover": { backgroundColor: "transparent" },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  buttonServices: {
    borderRadius: "20px",
    padding: "0.5rem 2rem",
    textTransform: "none",
  },
  videoButtonIcon: {
    color: "#102554",
    fontSize: "3rem"
  }
}));


export default function HeroSection({ state: heroSection }) {
  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.root}  >
      <Content content={heroSection.info} />
      <ImageBox imagePath={heroSection.imagePath} />
    </Grid>
  )

}

const Content = ({ content }) => {
  const classes = useStyles();
  return <Grid container className={classes.content} item direction="column" md={6} justifyContent="space-around" alignItems="flex-start">
    <Heading text={content.heading} />
    <Description text={content.description} />
    <ButtonSet content={content.buttons} />
  </Grid>
}

const Heading = ({ text }) => {
  const classes = useStyles();

  return <Grid container item direction="column" >
    <Grid item >
      <Typography
        variant="h2"
        className={classes.title}>
        {text.line1}
      </Typography>
    </Grid>

    <Grid item>
      <Typography
        variant="h2"
        className={classes.title}>
        {text.line2}
      </Typography>
    </Grid>
  </Grid>
}


const Description = ({ text }) => {
  const classes = useStyles();
  return <Grid item style={{ textAlign: "left" }}>
    <Typography variant="body2" >
      {text}
    </Typography>
  </Grid>
}

const ButtonSet = ({ content }) => {
  return <Grid container item alignItems="center">
    <ButtonServices text={content.services} />
    <ButtonWatchVideo text={content.watchVideo} />
  </Grid>
}

const ButtonServices = ({ text }) => {
  const classes = useStyles();
  return <Grid item md={6} >
    <Button variant="contained" color="primary" className={classes.buttonServices}>
      {text}
    </Button>
  </Grid>
}


const ButtonWatchVideo = ({ text }) => {
  const classes = useStyles();
  return <Grid container item alignItems="center" md={6}>
    <Grid item >
      <IconButton>
        <PlayCircleFilledIcon className={classes.videoButtonIcon} />
      </IconButton>
    </Grid>
    <Grid item >
      <Typography variant="subtitle1">
        {text}
      </Typography>
    </Grid>
  </Grid>
}

const ImageBox = ({ imagePath }) => {
  return <Grid item xs={12} md={6}>
    <img src={imagePath} alt="hero" />
  </Grid>
}
