import React, { useState } from "react";
import { Fab, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import HeadingWithText from "../utils/HeadingWithText";
import { useMediaQuery, useTheme } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E5E5E5"
  },

  buttonSet: {
    marginBottom: "2rem",
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center"
    }
  },
  image: {
    maxWidth: "100%",
    maxHeight: "auto%",
  },
  imagePanel: {
  }
}));

export default function Report({ state: report }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justifyContent="center" alignItems="flex-start">
      <HeadingWithText content={report.header} />
      <Box p={1}>
        <ImagePanel content={report.imagePanel} />
      </Box>
    </Grid>
  );
}



const ImagePanel = ({ content }) => {
  const classes = useStyles();
  const [activeReport, setActiveReport] = useState("pdf");

  return (

    <Grid container item className={classes.imagePanel} direction="column" justifyContent="flex-start" alignItems="flex-start">
      <Box p={1}>
        <Grid container item className={classes.buttonSet}>
          {Object.entries(content).map(([key, val]) => (
            <Box m={1}>
              <Grid item style={{ marginRight: "1rem" }}>
                <Fab
                  variant="extended"
                  color={activeReport === key ? "primary" : "textSecondary"}
                  onClick={() => setActiveReport(key)}
                >
                  {val.buttonText}
                </Fab>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Box>

      <ImageContainer content={content} activeReport={activeReport} />
    </Grid>
  );
};

const ImageContainer = ({ content, activeReport }) => {
  const classes = useStyles()
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const images = content[activeReport].images;

  return <Grid container item className={classes.imagesContainer} justifyContent="center" alignItems="center">
    {images.map(({ imagePath, altText = "logo-default" }, index) => (
      <Grid container item md={activeReport === "pdf" ? 4 : 12} justifyContent="center" alignItems="center" style={{ paddingBottom: "1rem" }}>
        <img loading="lazy" src={imagePath} alt={altText} className={classes.image} key={index} width={activeReport === "pdf" ? "90%" : "100%"} />
      </Grid>
    ))}
  </Grid>
}
