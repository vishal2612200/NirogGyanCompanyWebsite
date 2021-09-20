import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button , Divider, Hidden} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import Box from '@material-ui/core/Box';
import { useTheme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
  commonmargin:{
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    }
  },
  contentRight: {

    // "& >img": {
    //   maxWidth: "100%",
    //   maxHeight: "100%"
    // },
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
  // fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
  // borderRadius: "10px",
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

  const Card = ({ imagePath, date, content, readmore }) => {
    const classes = useStyles();

    return (
      <Grid className={classes.contentLeft} container item  alignContent="center" style={{marginBottom:"4%"}}>
        <Grid item>
          <img width="100%" style={{ borderRadius: "15px"}} src={imagePath} alt="main" />
        </Grid>
        <Grid item className={classes.commonmargin}>
          <Typography variant="h6" color="textSecondary">
            {date}
          </Typography>
        </Grid>
        <Grid item className={classes.commonmargin}>
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
            {readmore}
          </Typography>
        </Grid>
      </Grid>
    )
  }

  const CardsList = ({ content }) => {
    return <Grid container item>
      {
        content.map(
          (props, index) => (<Card {...props } key={index} />))}
    </Grid>
  }

  return <CardsList content={content.cardsList} />

}



const ContentRight = ({ content }) => {
  const classes = useStyles();
  const { popularPosts, categoriesList, categoriesButtons } = content;

  return <Grid container item >
    <HeadingWithCardsList heading={popularPosts.heading} cardsList={popularPosts.cardsList} card={<Card1 />} />
    <HeadingWithCardsList heading={categoriesList.heading} cardsList={categoriesList.cardsList} card={<Card2 />} />
    <HeadingWithCardsList heading={categoriesButtons.heading} cardsList={categoriesButtons.cardsList} card={<Card3 />} />
  </Grid>

}


const HeadingWithCardsList = ({ heading, cardsList, card }) => {

    const classes = useStyles();
    
    const CardsList = () => {
      const classes = useStyles();
      return <Grid container item className={classes.commonmargin} justifyContent="center" style={{ padding:"2rem 0" }} >
        {
          cardsList.map(
            (props, index) => <card.type  {...card.props} {...props}  />
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

  
 
  const Card1 = ({ imagePath, date, heading }) => {
    const classes = useStyles();
 const isSmallScreen = useSmallScreen();
    return (
      <Grid container className={classes.commonmargin}>
        <Grid item md={5}>
          <img src={imagePath}  alt="doctor" />
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item md={6} className={classes.textBox}>
          <Typography variant="paragraph" color="textSecondary">
            {date}
          </Typography>
          <Typography color="textPrimary" paragraph>
            <Box fontWeight="fontWeightBold">
              {heading}
            </Box>
        </Typography>
        </Grid>
      </Grid>
    )
  }
const Card2 = ({ text, key }) => {
    
  const classes = useStyles();
  const isSmallScreen = useSmallScreen();
  return (<Grid container item className={classes.commonmargin} justifyContent={isSmallScreen?"center":"flex-start"}>
      <Grid item style={{ marginRight: "10px"}}>
        <Typography variant="h4" color="primary" > <>  &#8226; </></Typography>
      </Grid>
      <Typography variant="h6" color="textSecondary" >
        {text}...{key}
      </Typography>
    </Grid>)



  }
  const Card3 = ({ text }) => {
    return (<Grid item md={6} className={classes.commonmargin}>
      <Button variant="outlined">{text}</Button>
    </Grid>
    )

  }
  return <Grid className={classes.contentRight} container item >
    <HeadingWithCardsList heading={popularPosts.heading} cardsList={popularPosts.cardsList} card={<Card1 />} />
    <HeadingWithCardsList heading={categoriesList.heading} cardsList={categoriesList.cardsList} card={<Card2 />} />
    <HeadingWithCardsList heading={categoriesButtons.heading} cardsList={categoriesButtons.cardsList} card={<Card3 />} />
  </Grid>
  )
}


function useSmallScreen() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
 
  return isSmallScreen;
}
