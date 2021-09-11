import React, { useState } from "react";
import { Fab, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import HeadingWithText from "../utils/HeadingWithText";

const useStyles = makeStyles((theme) => ({
  root: {
  },

  buttonSet: {},
  imagesContainer: {},
  image: {
    maxWidth: "100%",
    maxHeight: "auto%",
  },
}));

export default function Report({ state: report }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justifyContent="center">
      <HeadingWithText content={report.header} />
      <Box p={2}>
        <ImagePanel content={report.imagePanel} />
      </Box>
    </Grid>
  );
}

const ImagePanel = ({ content }) => {
  const classes = useStyles();
  const [activeReport, setActiveReport] = useState("pdf");
  return (

    <Grid container item className={classes.imagePanel} direction="column" justifyContent="flex-start">
      <Box p={2}>
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

      <Grid container item className={classes.imagesContainer}>
        {content[activeReport].images.map((imagePath) => (
          <Grid item>
            <img src={imagePath} alt="report" className={classes.image} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
