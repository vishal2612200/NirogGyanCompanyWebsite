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
    position: "sticky",

    backgroundImage: "linear-gradient(to right, #52BBE8, #69C3EB, #A3D8F1, #E1EFF8)",
    padding: "0.5rem",
  },
  title: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
    fontWeight: "700",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    }
  },
  content: {
    justifyContent: "space-evenly",
    alignItems: "left",
    padding: "2rem",
    [theme.breakpoints.up('sm')]: {

      paddingLeft: "5rem",
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center",
      alignItems: "center",
    }
  },
  text: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
      padding: "1rem"
    }
  },
  buttonSet: {

    alignItems: "center",
    justifyContent: "space-evenly"
  },
  buttonServicesContainer: {

    "&>button": {
      borderRadius: "20px",
      padding: "0.5rem 2rem",
      textTransform: "none",

    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: "space-evenly",
    }

  },
  buttonWatchVideoContainer: {
    alignItems: "center",
    "&>button": {
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: "space-evenly",
    }
  },
  watchVideoButton: {
    backgroundColor: "transparent",
    textTransform: "none",

    "&:hover": { backgroundColor: "transparent" },
  },

  videoButtonIcon: {
    color: "#102554",
    fontSize: "3rem"
  },
  imageBox: {
    minHeight: "70vh",
    backgroundSize: "contain", backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.down('md')]: {
      minHeight: "50vh",

    }
  },
  contentRight: {
    textAlign: "center",
    "& >img": {
      maxWidth: "100%",
      maxHeight: "100%"
    }
  }
}));


export default function HeroSection({ state: heroSection }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="space-evenly">
      <ContentLeft content={heroSection.contentLeft} md={6} />
      <ContentRight content={heroSection.contentRight} md={6} />
    </Grid>
  )

}


const ContentLeft = ({ content, ...props }) => {
  const classes = useStyles();
  return <Grid container item direction="column" className={classes.content} {...props}>
    <Grid item style={{ marginBottom: "12%" }}></Grid>
    <Grid item >
      <Heading text={content.heading} />
    </Grid>
    <Grid item>
      <Description text={content.description} />
    </Grid>
    <Grid item>
      <ButtonSet content={content.buttons} />
    </Grid>
  </Grid>
}

const Heading = ({ text }) => {
  const classes = useStyles();

  return <Grid container item direction="column">
    <Grid item style={{ marginBottom: "3%" }}>
      <Typography
        variant="h3"
        className={classes.title}>
        {text.line1}
      </Typography>
    </Grid>

    <Grid item>
      <Typography
        variant="h3"
        className={classes.title}>
        {text.line2}
      </Typography>
    </Grid>
  </Grid>
}


const Description = ({ text }) => {
  const classes = useStyles();
  return <Grid container item className={classes.text} style={{ marginTop: "5%", marginBottom: "5%" }}>
    <Typography variant="body2" >
      {text}
    </Typography>
  </Grid>
}


const ButtonSet = ({ content }) => {
  const classes = useStyles();
  return <Grid container item className={classes.buttonSet}>
    <Grid item md={4}>
      <ButtonServices text={content.services} />
    </Grid>
    <Grid item md={4}>
      <ButtonWatchVideo text={content.watchVideo} />
    </Grid>
    <Grid item md={4}></Grid>
  </Grid>
}


const ButtonServices = ({ text }) => {
  const classes = useStyles();
  return <Grid container item className={classes.buttonServicesContainer}>
    <Button variant="contained" color="primary">
      {text}
    </Button>
  </Grid>
}


const ButtonWatchVideo = ({ text }) => {
  const classes = useStyles();
  return <Grid container item className={classes.buttonWatchVideoContainer}>
    <Grid item>
      
      <IconButton className={classes.watchVideoButton} style={{ display: "inline-block", textAlign: "center" }}>
        <PlayCircleFilledIcon className={classes.videoButtonIcon} />
        <Typography variant="subtitle2" >
          {text}
        </Typography>
      </IconButton>
    </Grid>

  </Grid>
}


const ContentRight = ({ content, ...props }) => {
  const classes = useStyles();

  return <Grid item  className={classes.imageBox} {...props}>
    <img src={content.imagePath} alt="hero" width="100%" />
  </Grid>
}
