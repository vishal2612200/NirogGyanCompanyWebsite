import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core/Grid";
import { Box } from "@material-ui/core/Box";
import { Hidden } from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import HeadingWithText from "../utils/HeadingWithText";
import { useInView } from 'react-intersection-observer';
import "../component.css";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {

    padding: "2rem",
    textWrap: "word-break"
  },
  heading: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    }
  },
  evenCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  oddCard: {

    flexDirection: "row-reverse"
  },
  textContainer: {
    borderLeft: "3px dashed #grey",

  },
  card1: {
    borderRadius: "50%",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    width:"75%",
    [theme.breakpoints.down("sm")]: {
      marginTop:"44%",
      width:"100%",
    }

  },
  "@keyframes backgroundTransitionSmooth": {
    "0%": {
      background: "#3567D600"

    },
    "100%": {
      background: "#3567D6FF"
    }
  },


})
);

export default function Main({ state: main }) {

  const classes = useStyles();
  const { ref: refApi, inView: inViewApi } = useInView({ threshold: 0.4 });
  const { ref: refSoftware, inView: inViewSoftware } = useInView({ threshold: 0.6 });
  const { ref: refReport, inView: inViewReport } = useInView({ threshold: 0.4 });
  const { ref: refCustomer, inView: inViewCustomer } = useInView({ threshold: 0.6 });
 
  return (
    <Grid container className={classes.root} justifyContent="center" >
      <HeadingWithText content={main.header} />
      <Grid container item justifyContent="space-evenly" md={10}>
        <Grid container item className={classes.evenCard}>
          <Image reference={refApi} inView={inViewApi} image={main.cardsList[0].image} />
          <Grid container item xs={7} >

            <Grid item container style={{ marginTop: "15%" }} xs={8}>
              <Grid item>
                <Typography variant="h4" color="textPrimary">
                  <Box fontWeight="fontWeightMedium" m={1}>
                    {main.cardsList[0].heading}
                  </Box>
                </Typography>
                <Typography variant="paragraph" color="textSecondary" >
                  <Box m={1} style={{ marginTop: "5%" }}>
                    {main.cardsList[0].description}
                  </Box>
                </Typography>
                <Hidden smDown>
                  <Box m={1} style={{ marginTop: "10%", marginLeft: "-27%" }}>
                    <img width="100%" src={main.cardsList[0].linePath} alt="doctor" />
                  </Box>
                </Hidden>
              </Grid>
              <Hidden smDown>
                <Grid item container>
                  <Grid item xs={11}>
                  </Grid>
                  <Grid item xs={1}>
                    <img src={main.cardsList[0].arrowPath} alt="doctor" />
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>

          </Grid>
        </Grid>
        <Grid container item className={classes.oddCard}>
          <Image reference={refSoftware} inView={inViewSoftware} image={main.cardsList[1].image} />
          <Grid container item xs={7} alignContent="left" >
            <Hidden smDown>
              <Grid item xs={3}></Grid>
            </Hidden>

            <Grid item style={{ marginTop: "15%" }} xs={9}>
              <Typography variant="h4" color="textPrimary">
                <Box fontWeight="fontWeightMedium" m={1}>
                  {main.cardsList[1].heading}
                </Box>
              </Typography>
              <Typography variant="paragraph" color="textSecondary" >
                <Box m={1} style={{ marginTop: "5%" }}>
                  {main.cardsList[1].description}
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item className={classes.evenCard}>
            <Image reference={refReport} inView={inViewReport} image={main.cardsList[2].image} />
          <Grid container item xs={7} >
            <Grid item xs={8}>
              <Typography variant="h4" color="textPrimary" style={{ marginTop: "15%" }}>
                <Box fontWeight="fontWeightMedium" m={1}>
                  {main.cardsList[2].heading}
                </Box>
              </Typography>
              <Typography variant="paragraph" color="textSecondary" >
                <Box m={1} style={{ marginTop: "5%" }}>
                  {main.cardsList[2].description}
                </Box>
              </Typography>
              <Hidden smDown>
                <Box m={1} style={{ marginTop: "8%", marginRight: "-1%" }}>
                  <img width="100%" src={main.cardsList[2].arrowPath} alt="doctor" />
                </Box>
              </Hidden>

            </Grid>
            <Hidden smDown>
              <Grid item>
                <img width="95%" src={main.cardsList[2].linePath} alt="doctor" />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>

        <Grid container item className={classes.oddCard}>
          <Image reference={refCustomer} inView={inViewCustomer} image={main.cardsList[3].image} />
          <Grid container item xs={7} alignContent="left">
            <Hidden smDown>
              <Grid item container xs={3}>
                <Grid item md={11}></Grid>
                <Grid item md={1}>
                  <img height="82%" src={main.cardsList[3].linePath} alt="doctor" />
                </Grid>
              </Grid>
            </Hidden>
            <Grid item style={{ marginTop: "15%" }} xs={9}>
              <Typography variant="h4" color="textPrimary">
                <Box fontWeight="fontWeightMedium" m={1}>
                  {main.cardsList[3].heading}
                </Box>
              </Typography>
              <Typography variant="paragraph" color="textSecondary" >
                <Box m={1} style={{ marginTop: "5%" }}>
                  {main.cardsList[3].description}
                </Box>
              </Typography>
              <Hidden smDown>
                <Box m={1} style={{ marginTop: "8%", marginLeft: "-2%" }}>
                  <img width="100%" src={main.cardsList[3].arrowPath} alt="doctor" />
                </Box>
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const Image = ({ reference, inView, image: { imagePath, altText } }) => {
  const classes = useStyles();
  return <Grid item xs={5} ref={reference} >
    <img src={imagePath} className={clsx(classes.card1, inView ? "background-change" : "")}   alt={altText} />
  </Grid>
}