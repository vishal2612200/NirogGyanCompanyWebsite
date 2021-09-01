import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { HeadingWithText } from "./utils/HeadingWithText";
import Carousal from "./utils/Carousal";
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

  const videos = [
    "https://www.youtube.com/embed/H0cHIewcQ2M",
    "https://www.youtube.com/embed/MlLAXpoxNvQ",
    "https://www.youtube.com/embed/L4aPen8hCL8"
  ]
  return (
    <div>
      <Grid container>
        <Grid item>
          <HeadingWithText
            heading="NirogGyan Bytes"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit ac odio euismod facilisis tincidunt eu enim. Suspendisse massa diam, porta eget tristique in, feugiat eu justo."
          />
        </Grid>
        </Grid>
        
      <Carousal links={videos} component={(link) => <iframe
        width="auto"
        height="inherit"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
    } />
      
    </div>
  );

}

