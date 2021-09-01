import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem"

  },
  title: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
  },
  featureBox: {
    justifyContent: "space-between"

  },
  feature: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontSize: "2rem",
    border: "1px solid #B8BBBD",
    borderRadius: "10px",
    "&__image-box": {
      justifyContent: "center",
      alignItems: "center",

      padding: "1rem",
      backgroundColor: "#E9F5FF",
    },
    "&__text-box": {
      
      "&>*": {
        textAlign: "left",
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        padding: "1rem",
        textWrap: "word-break",
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",

        }
      }
    }
  },

  imageBox: {
    minHeight: "70vh",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.down('md')]: {
      minHeight: "50vh",
    }

  },
  content: {
    justifyContent: "space-between"
  }

})
);

export default function Features({ state: features }) {

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Content content={features.content} />
      <ImageBox imagePath={features.imagePath} />
    </Grid>
  );
}


const Content = ({ content }) => {
  const classes = useStyles();
  return <Grid container item md={6} direction="column" className={classes.content}>
    <Heading heading={content.heading} />
    <AllFeatures featureList={content.featureList} />
    {/* <ButtonSet content={content.buttons} /> */}
  </Grid>
}


const Heading = ({ heading }) => {
  const classes = useStyles();
  return <Grid container item direction="column">
    <Grid item xs={12} style={{ textAlign: "left" }}>
      <Typography
        style={{ display: "inline-block" }}
        variant="h4"
        className={classes.title}
        color="primary">
        {heading.line1[0]}
      </Typography>
      <Typography
        color="textPrimary"
        style={{ display: "inline-block" }}
        variant="h4"
        className={classes.title}>{heading.line1[1]} {heading.line1[2]}</Typography>
    </Grid>
    <Grid item xs={12}>

      <Typography
        variant="h5"
        className={classes.title}
      >
        {heading.line2}
      </Typography>
    </Grid>
    <Grid item xs={12}>

      <Typography
        variant="h4"
        className={classes.title}>
        {heading.line3}
      </Typography>
    </Grid>
  </Grid>
}




const AllFeatures = ({ featureList }) => {
  const classes = useStyles();
  return <Grid container item direction="column" className={classes.featureBox}>
    {featureList.map(({ imagePath, textThin, textBold }, index) => (<Feature {...{ imagePath, textThin, textBold }} key={index} />))}
  </Grid>


}



const Feature = ({ imagePath, textThin, textBold }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.feature}  >
      <Grid container item sm={4} className={`${classes.feature}__image-box`}>
        <Grid item>
          <img src={imagePath} alt="feature" />
        </Grid>
      </Grid>
      <Grid item sm={6} className={`${classes.feature}__text-box`}>
        <Typography variant="h6" color="textSecondary">
          {textThin}
        </Typography>
        <Typography variant="h6" color="textSecondary" style={{ fontWeight: "bolder" }}>
          {textBold}
        </Typography>
      </Grid>
    </Grid>
  )
}

const ImageBox = ({ imagePath }) => {
  const classes = useStyles();
  return <Grid container item md={6} className={classes.imageBox}
    style={{ backgroundImage: `url(${imagePath})` }}>
  </Grid>
}
