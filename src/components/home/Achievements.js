import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
// import Grow from "@material-ui/core/Grow"
// import { useInView } from "react-intersection-observer"


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "cover",
    alignItems: "center",
    backgroundAttachment: "fixed"
  },

  headerContainer: {
    textAlign: "center",
  },
  imageBox: {
    position: "absolute",

    [theme.breakpoints.down('sm')]: {
      flexDirection: "column"
    }
  },

  card: {
    width: "19%",
    height: "180px",
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    backgroundColor: "#1242AC",
    borderRadius: "26px",
    color: "#fff",
    padding: "3rem 1rem",
    textAlign: "center",
    margin: "3%",
    border: "2px dashed #fff",
    [theme.breakpoints.down('sm')]: {
      width: "250px"
    }
  }
}));

export default function Achievements({ state: achievements }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="center" alignItems="center"
      style={{ backgroundImage: ` url(${achievements.backgroundImage})` }}  >
      {achievements.cardsList.map((achievement, index) => (<Card content={achievement} key={index} />))}
    </Grid>
  );
}

const Card = ({ content }) => {
  const classes = useStyles();
  // const [ref, inView] = useInView({
  //   threshold: 0.2,
  // })

  return (
    <Grid item className={classes.card} >
      {/* <Grow in={inView} {...(inView ? { timeout: 1000 } : {})} >
        <span> */}
          <Typography variant="h4">{content.textBig}</Typography>
          <Typography variant="h6">{content.textSmall}</Typography>
        {/* </span>
      </Grow> */}
    </Grid>
  );
};
