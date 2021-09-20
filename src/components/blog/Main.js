import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button , Divider} from "@material-ui/core";
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
    <Grid container className={classes.root}>
      <Grid item md={1}></Grid>
      <Grid item md={6}>
      <ContentLeft content={main.contentLeft} />
      </Grid>
      <Grid item md={1}>
        </Grid>
      <Grid item md={3}>
      <ContentRight content={main.contentRight} />
      </Grid>
      <Grid item md={1}></Grid>
    </Grid>
  );
}


const ContentLeft = ({ content }) => {

  const Card = ({ imagePath, date, content, readmore }) => {
    const classes = useStyles();

    return (
      <Grid container item  alignContent="center" style={{marginBottom:"4%"}}>
        <Grid item>
          <img width="100%" src={imagePath} alt="main" />
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
      <Grid container className={classes.commonmargin} justifyContent={isSmallScreen?"center":"flex-start"}>
        <Grid item md={5}  >
          <img src={imagePath}  alt="doctor" />
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item md={6} className={classes.textBox}>
          <Typography variant="paragraph" color="textSecondary">
            {date}
          </Typography>
          <Typography color="textPrimary" paragraph>
            <Box fontWeight="fontWeightBold" m={1}>
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
  const classes = useStyles();
  return (<Grid item md={6} className={classes.commonmargin} style={{ justifySelf: "stretch" }}>
    <Button variant="outlined" style={{ width: "120px", textAlign: "center" }}>{text}</Button>
  </Grid>
  )
}


function useSmallScreen() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
 
  return isSmallScreen;
}
