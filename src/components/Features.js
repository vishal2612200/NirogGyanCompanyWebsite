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
  },
  title: {
    wordWrap: "break-word",
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
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
  feature: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontSize: "2rem",
    border: "1px solid #B8BBBD",
    "&__image-box": {
      backgroundColor: "#E9F5FF",
      padding: "1rem 3rem"
    }
  },
  "&__content": {
  }
}
));


const Feature = ({ imgPath, textThin, textBold }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.feature} >
      <Grid item className={`${classes.feature}__image-box`} sm={6}>
        <img src={imgPath} alt="feature" />
      </Grid>
      <Grid container item direction="column" sm={6} className={`${classes.feature}__content`} justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="body1" color="textSecondary">
            {textThin}        </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="textSecondary" style={{ fontWeight: "bolder" }}>
            {textBold}
          </Typography>
        </Grid>

      </Grid>
    </Grid>
  )
}


export default function SimpleContainer() {

  const classes = useStyles();

  const features = useFeatures();


  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="space-around"
        spacing={0}
        sm={12}
        md={6}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            // eslint-disable-next-line eqeqeq
            className={classes.title}
          >
            Health Knowledge + Modern Design
          </Typography>
          <Typography
            variant="h4"
            // eslint-disable-next-line eqeqeq
            className={classes.title}
            alignCenter
          >
            =
          </Typography>
          <Typography
            variant="h4"
            // eslint-disable-next-line eqeqeq
            className={classes.title}
          >
            Patient-friendly Medical Reports
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.text}>
          {features}
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            style={{
              borderRadius: "20px",
              padding: "0.5rem 2rem",
              textTransform: "none",
            }}
          >
            our Services
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <img src={process.env.PUBLIC_URL + "/features/features-big.png"} alt="hero" />
      </Grid>
    </Grid>
  );
}

function useFeatures() {
  return [
    {
      imgPath: process.env.PUBLIC_URL + "/features/features-item-1.png",
      textThin: "Software with 250+",
      textBold: "Pathology Biomarkers"
    },
    {
      imgPath: process.env.PUBLIC_URL + "/features/features-item-2.png",
      textThin: "Knowledge Bank backed by",
      textBold: "Doctors & Evidence"
    },
    {
      imgPath: process.env.PUBLIC_URL + "/features/features-item-3.png",
      textThin: "Add-ons : Multi - language",
      textBold: "Content, Graphs, Analytics"
    }
  ].map(({ imgPath, textThin, textBold }, index) => (<Feature {...{ imgPath, textThin, textBold }} key={index} />));
}

