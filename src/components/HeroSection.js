import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: "linear-gradient(to right, #52BBE8, #69C3EB, #A3D8F1, #E1EFF8)",
  },
  title: {
    wordWrap: "break-word",
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
}));


export default function HeroSection({ state: heroSection }) {
  const classes = useStyles();
  return <Grid container spacing={2} className={classes.root}>
    <Content content={heroSection.info} />
    <ImageBox imagePath={heroSection.imagePath} />
  </Grid>

}
const Content = ({ content }) => {
  const classes = useStyles();
  return <Grid item container direction="row" justifyContent="flex-start" alignItems="space-around" sm={12} md={6} >
    <Heading text={content.heading} />
    <Description content={content.description} />
    <ButtonSet content={content.buttons} />
  </Grid>
}

const Heading = ({ text }) => {
  const classes = useStyles();
  console.log(text);

  return <Grid item xs={12}>
    <Typography
      variant="h2"
      // eslint-disable-next-line eqeqeq
      className={classes.title}>
      {text.line1}
    </Typography>
    <Typography
      variant="h2"
      // eslint-disable-next-line eqeqeq
      className={classes.title}>
      {text.line2}
    </Typography>
  </Grid>
}
const Description = ({ content }) => {
  const classes = useStyles();
  return <Grid item xs={12} className={classes.text}>
    {content}
  </Grid>
}

const ImageBox = ({ imagePath }) => {

  return <Grid item xs={12} sm={12} md={6}>
    <img src={imagePath} alt="hero" />
  </Grid>
}

const ButtonSet = ({ content }) => {
  return <>  <ButtonServices text={content.services} />
    <ButtonWatchVideo text={content.watchVideo} />
  </>
}

const ButtonServices = ({ text }) => {
  return <Grid item xs={6}>
    <Button
      variant="contained"
      color="primary"
      style={{
        borderRadius: "20px",
        padding: "0.5rem 2rem",
        textTransform: "none",
      }}
    >
      {text}
    </Button>
  </Grid>
}


const ButtonWatchVideo = ({ text }) => {
  return <>
    <Grid item xs={6}>
      <IconButton>
        <PlayCircleFilledIcon
          style={{ color: "#102554", fontSize: "3rem" }}
        />
      </IconButton>
      <Typography
        variant="subtitle1"
      // eslint-disable-next-line eqeqeq
      >
        {text}
      </Typography>
    </Grid></>
}
