import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
  commonmargin: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    }
  },
  contentRight: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 5%",
    }
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
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 5%",
    }
  },
  imageBox: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#E9F5FF",
    "&>img": {
      margin: "auto "
    }
  },
  textBox: {
    "&>*": {
      textAlign: "left",
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      padding: "0.2rem 1rem",
      textWrap: "word-break"
    }
  },
  datecss: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    }

  },
  card: {
    border: "1px solid #B8BBBD",
    marginBottom: "2rem"
  }
}));



export default function Main({ state: main }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Hidden smDown>
        <Grid item md={1}></Grid>
      </Hidden>
      <Grid item md={6}>
        <ContentLeft content={main.contentLeft} />
      </Grid>
      <Hidden smDown>
        <Grid item md={1}></Grid>
      </Hidden>
      <Grid item md={3}>
        <ContentRight content={main.contentRight} />
      </Grid>
      <Hidden smDown>
        <Grid item md={1}></Grid>
      </Hidden>
    </Grid>
  );
}
const ContentLeft = ({ content }) => {


  const Card = ({ image: { imagePath, altText = "logo-default" }, date, content, readmore, blogurl }) => {
    const classes = useStyles();
    return (
      <Grid className={classes.contentLeft} container item alignContent="center" style={{ marginBottom: "4%" }}>
        <Grid item>
          <img loading="lazy" width="100%" style={{ borderRadius: "15px" }} src={imagePath} alt={altText} />
        </Grid>
        <Grid item className={classes.commonmargin}>
          <Typography variant="h6" color="textSecondary">
            {date}
          </Typography>
        </Grid>
        <Grid item className={classes.commonmargin} >
          <Typography variant="h4">
            {content.heading}
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            className={classes.commonmargin}
          >
            {content.description}
          </Typography>
        </Grid>
        <Grid item className={classes.commonmargin}>
          <Typography variant="h6" color="primary">
            <a style={{ textDecoration: "none" }} href={blogurl} rel="noreferrer" target="_blank">
              {readmore}
            </a>
          </Typography>

        </Grid>
      </Grid>
    )
  }

  const CardsList = ({ content }) => {
    return <Grid container item>
      {
        content.map((props, index) => (
          <Card {...props} key={index} />))
      }
    </Grid>
  }


  return <CardsList content={content.cardsList} />
}






const ContentRight = ({ content }) => {
  const classes = useStyles();
  const { popularPosts } = content;





  const HeadingWithCardsList = ({ heading, cardsList, card }) => {
    const CardsList = () => {
      const classes = useStyles();
      return <Grid container item className={classes.commonmargin}>
        {
          cardsList.map(
            (props, index) => {
              let p = { ...props, key: index }
              return <card.type  {...p} />
            }
          )
        }
      </Grid>
    }
    return <Grid container item direction="column" className={classes.commonmargin}>
      <Grid item>
        <Typography variant="h4" color="textPrimary" className={classes.heading}>
          {heading}
        </Typography>
        <Divider />
      </Grid>
      <CardsList />
    </Grid>
  }


  const Card1 = ({ image: { imagePath, altText = "logo-default" }, date, heading, blogurl }) => {
    const classes = useStyles();
    return (
      <Grid container className={classes.commonmargin}>
        <Grid item md={5}>
          <a href={blogurl} rel="noreferrer" target="_blank">
            <img loading="lazy" src={imagePath} alt={altText} />
          </a>
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item md={6} className={classes.textBox}>
          <Typography  color="textSecondary" component="div">
            <Box className={classes.datecss}>
              {date}
            </Box>
          </Typography>
          <Typography color="textPrimary" component="div">
            <Box fontWeight="fontWeightBold">
              {heading}
            </Box>
          </Typography>
        </Grid>

      </Grid>
    )
  }

  return <Grid container item className={classes.contentRight}>
    <HeadingWithCardsList heading={popularPosts.heading} cardsList={popularPosts.cardsList} card={<Card1 />} />
  </Grid>
}