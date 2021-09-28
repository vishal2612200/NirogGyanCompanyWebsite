import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import Grow from "@material-ui/core/Grow"
import { useInView } from "react-intersection-observer"


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to right, #3567D6, #13DED2)",
    alignItems: "center",
    overflow: "hidden",
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
    width: "250px",
    height: "180px",
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    backgroundColor: "#1242AC",
    borderRadius: "26px",
    color: "#fff",
    padding: "3rem 1rem",
    textAlign: "center",
    margin: "3%",
    border: "2px dashed #fff"
  }
}));

export default function Achievements({ state: achievements }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justifyContent="center" alignItems="center"    >
      <Grid container md={6} justifyContent="space-around" style={{
        backgroundImage: `url(${achievements.backgroundImage.left})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "2.5rem 0",
        backgroundAttachment: "fixed"
      }}>
        {achievements.cardsList.slice(0, 2).map((achievement, index) => (<Card content={achievement} key={index} />))}
      </Grid>
      <Grid container item md={6} justifyContent="space-around" style={{
        backgroundImage: `url(${achievements.backgroundImage.right})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "2.5rem 0"


      }}>
        {achievements.cardsList.slice(2).map((achievement) => (<Card content={achievement} />))}
      </Grid>
    </Grid>
  );
}

const Card = ({ content }) => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    threshold: 0.2,
  })

  return (
    <Grid item className={classes.card} ref={ref}>
      <Grow in={inView} {...(inView ? { timeout: 3000 } : {})} >
        <span>
          <Typography variant="h4">{content.textBig}</Typography>
          <Typography variant="h6">{content.textSmall}</Typography>
        </span>
      </Grow>
    </Grid>
  );
};
