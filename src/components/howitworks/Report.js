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
    backgroundColor: "#EAEEF3",
    justifyContent: "space-evenly",
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
    padding: "3rem",
  },
  title: {
    wordWrap: "break-word",
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
  },
  contentLeft: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  contentRight: {
    textAlign: "center",
    margin: "auto",
    "& img": {
      maxWidth: "100%",
      height: "auto"
    }
  },
  headerContainer: {
    textAlign: "center",
  },
  cardList: {
    justifyContent: "space-around",
    padding: "2rem",
    flexGrow: 0
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "2rem"

  },
  card: {
    padding: "2rem 3rem",
    borderRadius: "20px",
    backgroundColor: "#fff"
  }
}
));






export default function Report({ state: report }) {
  const classes = useStyles();
  return (
    <Grid container spacing={8} className={classes.root}>
      <ContentLeft content={report.contentLeft} />
      <ContentRight content={report.contentRight} />
    </Grid>
  );

}



const ContentLeft = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column" xs={12} md={6} className={classes.contentLeft}>
    <Header content={content.header} />
    <CardList content={content.cardsData} />
  </Grid>
}

const ContentRight = ({ content }) => {
  const classes = useStyles();

  return <Grid container item direction="column" xs={12} md={6} className={classes.contentRight}>
    <Grid item>
      <img src={content.imagePath} alt="report-sample" />
    </Grid>
  </Grid>
}

const Header = ({ content }) => {
  const classes = useStyles();
  return <Grid item className={classes.headerContainer}>
    <Typography
      variant="h3"
      className={classes.heading}>
      {content.heading}
    </Typography>
    <Typography
      variant="h6"
      color="textSecondary"
      className={classes.description}>
      {content.description}
    </Typography>
  </Grid>

}

const CardList = ({ content }) => {
  const classes = useStyles();
  return <Grid container item className={classes.cardList} >
    {content.map(({ imagePath, name }, index) => (
      <Card {...{ imagePath, name }} key={index} />
    ))}
  </Grid>
}

const Card = ({ imagePath, name }) => {

  const classes = useStyles();
  return (
    <Grid container item xs={12} sm={6} justifyContent="center" className={classes.cardContainer} >
      <Grid item className={classes.card}>
        <img src={imagePath} alt="feature" />
        <Typography variant="h6">{name}</Typography>
      </Grid>
    </Grid>
  );
}
