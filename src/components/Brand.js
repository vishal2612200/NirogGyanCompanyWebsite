import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import * as path from 'path';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  containerImgLogo: {
    border: "2px solid #666666",
  },
  imgLogo: {
    width: "250px",
    filter: "grayscale(100%)",
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const trustedBrandsLogoImages = [
    path.join(process.env.PUBLIC_URL, "brands", "crelio-health.png"),
    path.join(process.env.PUBLIC_URL, "brands", "dr-dang-labs.png"),
    path.join(process.env.PUBLIC_URL, "brands", "medlife.png"),
    path.join(process.env.PUBLIC_URL, "brands", "niramaya.png")
  ];
  return (
    <div className={classes.root}>
      <Typography variant="h2" color="textPrimary" className={classes.title}>
        Trusted HealthCare Brands
      </Typography>
      <Box
        display="flex"
        justifyContent="space-evenly"
        padding="2rem"
        flexWrap="wrap"
        alignContent="center"
        alignItems="center"
      >
        {trustedBrandsLogoImages.map((image) => (
          <img className={classes.imgLogo} src={image} alt="" />
        ))}
      </Box>
    </div>
  );
}
