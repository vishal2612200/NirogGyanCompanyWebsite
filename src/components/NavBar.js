import React, { createContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, IconButton, AppBar, Toolbar, Typography, Grid, useTheme } from "@material-ui/core";
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
  const [isButtonPressed, setIsButtonPressed] = useState(false);


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#ffffff" }}>
        <Toolbar className={classes.toolbar} >
          <Grid container style={{ margin: "0 3rem 0 1rem" }}>
            <ImageBox imgPath={navBar.logoImg} />
            <MenuOpenButton setIsButtonPressed={setIsButtonPressed} />
            <NavItems links={navBar.navLinks} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}



const MenuOpenButton = ({ setIsButtonPressed }) => {

  const classes = useStyles();
  const isSmallScreen = useSmallScreen();

  return <>
    {
      isSmallScreen ? (
        <Grid container item xs={6} justifyContent="flex-end">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
            onClick={(state) => setIsButtonPressed(!state)}>
            <MenuIcon />
          </IconButton>

        </Grid>
      ) : ""
    }</>
}





const NavItems = ({ links }) => {
  const isSmallScreen = useSmallScreen();
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  let navItems = links.map(
    (text, index) => {
      return <Grid item key={index}>
        <Link
          onClick={() => setActiveLinkIndex(index)}
          underline={activeLinkIndex === index ? "always" : "none"}>
          <Typography
            variant="h6"
            color={activeLinkIndex == index ? "primary" : "textSecondary"}
          >
            {text}
          </Typography>
        </Link>
      </Grid>
    })

  return <> {!isSmallScreen ? (
    <Grid container item key='navItems' spacing={7} md={9} justifyContent="flex-end">
      {navItems}
    </Grid>
  ) : ""
  }</>
}

const ImageBox = ({ imgPath }) => (
  <Grid container key='imgBox' item xs={6} md={3} justifyContent="flex-start">
    <img
      src={imgPath}
      alt="Logo"
    />
  </Grid>)

function useSmallScreen() {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return isSmallScreen;
}

