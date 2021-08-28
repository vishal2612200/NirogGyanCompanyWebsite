import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    <React.Fragment>
      {/* <img src={process.env.PUBLIC_URL + "/doctor.jpg"} alt="Broken" style={{ width: "90vw" }} />
       */}
      <Box
        style={{ position: "relative", top: 0 }}
        display="flex"
        flexDirection="column"
        width="100%"
        flexWrap="wrap"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={12}>
            Simplifying
          </Grid>

          <Grid item xs={12}>
            Medical Reports
          </Grid>
          <Grid item xs={12}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            illo optio dolorum provident incidunt nulla tempore! Commodi sunt
            dignissimos ut ea quaerat fugit voluptate, aliquam vero placeat vel
            debitis dolor?{" "}
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
