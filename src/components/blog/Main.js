import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import HeadingWithText from "../utils/HeadingWithText";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
    textWrap: "word-break"
  },
  contentRight: {

    "& >img": {
      maxWidth: "100%",
      maxHeight: "100%"
    }
  },
  heading: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
    marginBottom: "2rem",
    borderBottom:"2px solid ##808080",
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
        "&>img": {
    margin: "auto "
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
    marginBottom: "2rem"

}

})
);

export default function Main({ state: main }) {

  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <ContentLeft content={main.contentLeft} />
      <ContentRight content={main.contentRight} />
    </Grid>
  );
}


const ContentLeft = ({ content }) => {
  const classes = useStyles();

  const Card = ({ imagePath, date, content, readmore }) => {
    const classes = useStyles();

    return (
      <Grid container item className={classes.card} direction="column">
        <Grid item className={classes.imageBox}>
          <img src={imagePath} alt="main" />
        </Grid>
        <Grid item className={classes.textBox}>
          <Typography variant="h6" color="textSecondary">
            {date}
          </Typography>
          <HeadingWithText content={content} />
          <Typography variant="h6" color="primary">
            {readmore}
          </Typography>

        </Grid>
      </Grid>
    )
  }

  const CardsList = ({ content }) => {
    const classes = useStyles();
    return <Grid container item direction="column" justifyContent="space-evenly" className={classes.cardsList} md={8}>
      {
        content.map(
          ({ imagePath, date, content, readmore }, index) => (<Card {...{ imagePath, date, content, readmore }} key={index} />))}
    </Grid>
  }


  return <CardsList content={content.cardsList} />

}



const ContentRight = ({ content }) => {
  const classes = useStyles();
  const { popularPosts, categoriesList, categoriesButtons } = content;

  const HeadingWithCardsList = ({ heading, cardsList, card }) => {


    const CardsList = () => {
      const classes = useStyles();
      return <Grid container item direction="column" justifyContent="space-evenly" className={classes.cardsList}>
        {
          cardsList.map(
            (props, index) => (React.cloneElement(card, { ...props })))
        }
      </Grid>
    }

    return <Grid container item direction="column" justifyContent="space-evenly" className={classes.cardsList}  >
      <Grid item>
        <Typography variant="h4" color="textPrimary" className={classes.heading}>
          {heading}
        </Typography>
      </Grid>
      <CardsList />
    </Grid>
  }

  const Card1 = ({ imagePath, date, heading }) => {
    const classes = useStyles();

    return (
      <Grid container className={classes.card}   >
        <Grid item xs={6} className={classes.imageBox} >
          <img src={imagePath} alt="doctor" />
        </Grid>
        <Grid item xs={6} className={classes.textBox} flexGrow="2">
          <Typography variant="h6" color="textSecondary">
            {date}
          </Typography>
        </Grid>
        <Typography variant="h5" color="textPrimary" paragraph>
          {heading}
        </Typography>

      </Grid>
    )
  }
  const Card2 = ({ text, key }) => {

    return (<Grid container item alignItems="center" >
      <Grid item style={{ marginRight: "10px" }}>
        <Typography variant="h4" color="primary" > <>  &#8226; </></Typography>
      </Grid>
      <Typography variant="h6" color="textSecondary" >
        {text}.......................{key}
      </Typography>
    </Grid>)



  }
  const Card3 = ({ text }) => {
    return (<Grid item>
      <Button variant="contained">{text}</Button>
    </Grid>
    )

  }
  return <Grid container item direction="column" justifyContent="space-evenly" className={classes.contentRight} md={4}>
    <HeadingWithCardsList heading={popularPosts.heading} cardsList={popularPosts.cardsList} card={<Card1 />} />
    <HeadingWithCardsList heading={categoriesList.heading} cardsList={categoriesList.cardsList} card={<Card2 />} />
    <HeadingWithCardsList heading={categoriesButtons.heading} cardsList={categoriesButtons.cardsList} card={<Card3 />} />
  </Grid>

}

