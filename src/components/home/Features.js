import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem"

  },
  heading: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    }
  },
  contentLeft: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    borderRadius: "10px",
  },
  imageBox: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#E9F5FF",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",

    "&>img": {
      margin: "auto",
      maxHeight: "100%",
      maxWidth: "auto",

    }
  },
  textBox: {

    "&>*": {
      textAlign: "left",
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      padding: "1rem",
      textWrap: "word-break"
    }
  },
  card: {
    border: "1px solid #B8BBBD",
    marginBottom: "2rem",
    borderRadius: "10px",
  },
  contentRight: {
    textAlign: "center",
    "& >img": {
      maxHeight: "100%",
      maxWidth: "auto",
    }
  },

})
);

export default function Features({ state: features }) {

  const classes = useStyles();

  return (
    <Grid container justifyContent="center"  >
      <Grid container item xs={10} justifyContent="space-around" >
        <ContentLeft content={features.contentLeft} />
        <ContentRight content={features.contentRight} />
      </Grid>
    </Grid>
  );
}


const ContentLeft = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column" md={6} alignContent="center" >
    <Grid item style={{ marginBottom: "4%" }}>
      <Header content={content.header} />
    </Grid>
    <Grid item>
      <CardsList content={content.cardsData} />
    </Grid>
  </Grid>
}

const Header = ({ content }) => {
  const classes = useStyles();
  return <Grid item >
    <Typography
      variant="h4">
      {content.line1}
    </Typography>

    <Typography
      variant="h4">
      {content.line2}
    </Typography>
    <Typography
      variant="h4">
      {content.line3}
    </Typography>

  </Grid>
}



const CardsList = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column" justifyContent="space-evenly" className={classes.cardsList}>
    {content.map(({ imagePath, textThin, textBold }, index) => (<Card {...{ imagePath, textThin, textBold }} key={index} />))}
  </Grid>


}


const Card = ({ imagePath, textThin, textBold }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.card}  >
      <Grid item xs={4} className={classes.imageBox}>
        <img src={imagePath} alt="feature" />
      </Grid>
      <Grid item xs={8} className={classes.textBox}>
        <Typography component="div">
          <Box fontWeight="fontWeightLight" m={1}>
            {textThin}
          </Box>
          <Box fontWeight="fontWeightBold" m={1}>
            {textBold}
          </Box>
        </Typography>
      </Grid>
    </Grid>
  )
}

const ContentRight = ({ content }) => {
  const classes = useStyles();

  return <Grid item xs={12} md={6} className={classes.contentRight}>
    <img src={content.imagePath} alt="doctor" />
  </Grid>
}
