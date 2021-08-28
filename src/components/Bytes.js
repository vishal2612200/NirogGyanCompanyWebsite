import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "./Card";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#05152E"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  typography: {
    align: "center",
    padding: "2% 10%",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const cardList = [
    {
      media: { icon: "fa-solid fa-magnifying-glass" },
      content: {
        heading: "Search Doctor",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      },
    },
    {
      media: { icon: "fa-solid fa-magnifying-glass" },
      content: {
        heading: "Online Pharmacy",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      },
    },
    {
      media: { icon: "fa-solid fa-magnifying-glass" },
      content: {
        heading: "Consultation",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      },
    }
  ];
  return (
    <div className={classes.root}>
      <Typography variant="h2" color="primary" className={classes.title}>
        NirogGyan Bytes
      </Typography>

      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.typography}
        gutterBottom
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        commodi iure sequi. Sint, quibusdam. Voluptatibus atque eaque
        accusantium impedit obcaecati maxime odio debitis ratione quam ipsa
        aperiam, architecto fugit voluptas?
      </Typography>

      <Grid container spacing={3} width="80%">
        {cardList.map(({ media, content }) => (
          <Grid item xs={12} lg={4}>
            <Paper className={classes.paper}>
              <Card media={media} content={content}></Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );

}
