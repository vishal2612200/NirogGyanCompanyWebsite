import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Container,
  Box,
  Grid,
  Button,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import DetailsIcon from "@material-ui/icons/Details";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    wordWrap: "break-word",
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
    fontWeight: "700",
  },
  text: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
  },
  watchVideoButton: {
    backgroundColor: "transparent",
    textTransform: "none",
    "&:hover": { backgroundColor: "transparent" },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      style={{
        backgroundImage:
          "linear-gradient(to right, #52BBE8, #69C3EB, #A3D8F1, #E1EFF8)",
      }}
    >
      <Grid
        item
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="space-around"
        flexShrink="1"
        spacing={0}
        sm={12}
        md={6}
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            // eslint-disable-next-line eqeqeq
            className={classes.title}>
            Simplifying
          </Typography>
          <Typography
            variant="h2"
            // eslint-disable-next-line eqeqeq
            className={classes.title}>
            Medical Reports
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.text}>
          NirogGyan makes lab tests engaging so that you understand your health
          better, with easy-to-understand and visual SmartReports. We are B2B
          and work with healthcare providers.{" "}
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            style={{
              borderRadius: "20px",
              padding: "0.5rem 2rem",
              textTransform: "none",
            }}
          >
            our Services
          </Button>
        </Grid>
        <Grid item xs={6}>
          <IconButton>
            <PlayCircleFilledIcon
              style={{ color: "#102554", fontSize: "3rem" }}
            />
          </IconButton>
          <Typography
            variant="h8"
            // eslint-disable-next-line eqeqeq
          >
            Watch Video
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <img src={process.env.PUBLIC_URL + "/hero-image.png"} alt="hero" />
      </Grid>
    </Grid>
  );
}
