import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

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
    // "https: //www.affoy.com/wp-content/uploads/2019/01/medlife-300x134.jpg",
    "https://s3-ap-southeast-1.amazonaws.com/livehealthuser/images/CL-logo-green-black-text-1000px.svg",
    "http://www.niramayahealthcare.com/img/img/logo.png",
    "https://drdangslab.com/images/DDL-Logo-ICMR.png",
  ];
  return (
    <div className={classes.root}>
      <Typography variant="h2" color="primary" className={classes.title}>
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
