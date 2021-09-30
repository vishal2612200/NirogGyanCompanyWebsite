import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import BigRightImageSection from "../utils/BigRightImageSection";
import Card from "../utils/FeatureCard";
import Grow from "@material-ui/core/Grow"
import { useInView } from "react-intersection-observer"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem"
  },
  headingfont: {
    fontSize: "1.7rem",
    fontWeight: "900"
  },
  header: {
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    }
  },
  contentLeft: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    borderRadius: "10px",
    padding: "3rem",
    [theme.breakpoints.down('sm')]: {
      padding: "0rem"
    }

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
      maxWidth: "100%",
      maxHeight: "100%"
    },
    imageBox: {
      minHeight: "70vh",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      [theme.breakpoints.down('md')]: {
        minHeight: "50vh",

      }
    }
  },
  headingstyle: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: 900,
    fontSize: "2rem",
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.5rem",
    }
  },

}));


export default function Features({ state: features }) {


  return (
    <BigRightImageSection
      contentLeft={<ContentLeft content={features.contentLeft} />}
      image={{
        imagePath: features.contentRight.imagePath, altText: "feature"
      }} />

  );
}


const ContentLeft = ({ content }) => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  return <Grid container item direction="column" alignContent="center" ref={ref}
    className={classes.contentLeft}>
    <Grid item style={{ marginBottom: "4%" }}>
      <Header content={content.header} />
    </Grid>
    <Grid item>
      <Grow in={inView} {...(inView ? { timeout: 3000 } : {})} >
        <div>
          <CardsList content={content.cardsList} />
        </div>
      </Grow>
    </Grid>
  </Grid>
}

const Header = ({ content }) => {
  const classes = useStyles();

  return <Grid item className={classes.header}>
    <Grid item >
      <Typography
        variant="h4" gutterBottom
        className={classes.headingstyle}
      >
        {
          content.heading.map(
            ({ text, style = {} }, index) => ((style && <span key={index} style={style}> {`${text} `}</span>) || `${text} `)
          )}
      </Typography>
      {content?.description && <Typography
        variant="body1"
        color="textSecondary"
        style={{
          fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
          padding: "1rem"
        }}>
        {content.description}
      </Typography>}
    </Grid>
  </Grid>
}



const CardsList = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column" justifyContent="space-evenly" className={classes.cardsList}>
    {content.map((props, index) => (<Card {...props} key={index} />))}
  </Grid>


}
