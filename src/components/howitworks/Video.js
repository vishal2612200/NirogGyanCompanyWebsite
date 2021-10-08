import React from "react";
import { Grid } from "@material-ui/core/Grid";
import { Box } from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import HeadingWithText from "../utils/HeadingWithText";
import "../component.css";

const useStyles = makeStyles((theme) => ({
  
  card: {
    alignItems: "center",
    backgroundColor: "#05152E",
    height:"90vh",
    [theme.breakpoints.down("sm")]: {
        height: "50vh"
    },
  },
  video:{
    borderRadius: "10px",
    height:"60vh",
    [theme.breakpoints.down("sm")]: {
        height: "40vh"
    },
  }

})
);

export default function Video({ state: video }) {

  const classes = useStyles();
 
  return (
    <Grid container  justifyContent="center" >
      <HeadingWithText content={video.header} />
      <Grid container item justifyContent="space-evenly"  className={classes.card}>
          
        <Box justifyContent="center" width="80%">
            <iframe 
            
            className={classes.video}
            width="100%"
            rel="preload"
            
            src={video.videoPanel.videoLink}
            title={video.videoPanel.title}
            frameborder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </Box>
        </Grid>
    </Grid>
  );
}

