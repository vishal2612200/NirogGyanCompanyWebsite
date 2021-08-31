import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, IconButton, AppBar, Toolbar, Typography, Box, useTheme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useMediaQuery } from "@material-ui/core";
import * as path from "path";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  [theme.breakpoints.up('sm')]: {
    toolbar: {
      width: "100%",
      fontFamily: 'arial',
      justifyContent: "space-around",
      alignItems: "center",
    },
    imgBox: {
      display: "flex",
      flex: "2 1 auto",
      justifyContent: "center",
    },
    navItemsBox: {
      flex: "5 2 auto",
      display: "flex",
      justifyContent: "space-evenly",
    }
  },
  [theme.breakpoints.down('sm')]: {
    toolbar: {
      width: "100%",
      fontFamily: 'arial',
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap"
    },
    imgBox: {
      display: "flex",
      flex: "1 1 auto",
      justifyContent: "space-between",
    },
    navItemsBox: {
      flex: "1 2 auto",
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));


export default function NavBar({ state: navBar }) {
  const classes = useStyles();

  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


  let navItems = (
    navBar.navLinks.map((text, index) => (
      // eslint-disable-next-line eqeqeq
      <Link key={index}
        onClick={() => setActiveLinkIndex(index)}
        underline={activeLinkIndex === index ? "always" : "none"}>
        <Typography
          variant="h6"
          // eslint-disable-next-line eqeqeq
          color={activeLinkIndex == index ? "primary" : "textSecondary"}
          className={classes.title}
        >
          {text}
        </Typography>
      </Link>
    )));;


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#ffffff" }}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.imgBox} key='imgBox' flexWrap="wrap">
            <img
              src={path.join(process.env.PUBLIC_URL, "/logo-icon.png")}
              alt="Broken"
              className={classes.imgLogo}
            />
            {isSmallScreen ? <IconButton
              edge="start"
              className={classes.menuButton}
              color="primary"
              aria-label="menu"
              onClick={(state) => setIsButtonPressed(!state)}>
              <MenuIcon />
            </IconButton>
              : ""}
          </Box>

          <Box className={classes.navItemsBox} key='navItems'>
            {!isSmallScreen || (isSmallScreen && isButtonPressed) ? navItems : ""}
          </Box>
        </Toolbar>
      </AppBar>


    </div>
  );
}
