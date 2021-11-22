import React, { useState, useContext, createContext, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSpring, animated } from 'react-spring'

import {
  BrowserRouter,
  NavLink
}
  from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  [theme.breakpoints.up('sm')]: {
    toolbar: {
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
      fontFamily: 'arial',
      justifyContent: "space-around",
      alignItems: "center",
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
  },
  inActiveNavItemsStyling: {
    textDecoration: "none",
    fontSize: "1.25rem",
    margin: "8px 11px",
    padding: "1px 17px",
    color: "#5089B0",

    '&:hover': {
      color: "#fff",
      backgroundColor: "#163b76",

      borderRadius: "25px",
    },
  },
  activeNavItemsStyling: {
    fontSize: "1.25rem",

    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#163b76",
    padding: "1px 17px",
    borderRadius: "25px",
    margin: "8px 13px"

  }
}));


export const NavContext = createContext();

export default function NavBar({ state: navBar }) {
  const classes = useStyles();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return (
    <NavContext.Provider value={{ isButtonPressed, setIsButtonPressed, activeLinkIndex, setActiveLinkIndex }}>
      <animated.div className={classes.root} style={props}>
        <AppBar position="static" style={{ backgroundColor: "#ffffff" }}>
          <Toolbar className={classes.toolbar} >
            <Grid container >
              <ImageBox image={navBar.logo} />
              <MenuOpenButton />
              <NavItemsMediumScreen links={navBar.links} />
            </Grid>

          </Toolbar>
          {
            <NavItemsSmallScreen links={navBar.links} />

          }
        </AppBar>
      </animated.div>
    </NavContext.Provider>
  );
}



const MenuOpenButton = () => {

  const classes = useStyles();
  const isSmallScreen = useSmallScreen();
  const { setIsButtonPressed } = useContext(NavContext);

  return <>
    {
      isSmallScreen ? (
        <Grid container item xs={6} justifyContent="flex-end">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
            onClick={() => setIsButtonPressed(state => !state)}>
            <MenuIcon />
          </IconButton>
        </Grid>
      ) : ""
    }
  </>
}




const NavItemsSmallScreen = ({ links }) => {
  const isSmallScreen = useSmallScreen();
  const { isButtonPressed } = useContext(NavContext);
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: { duration: 500 }, reset: true })

  return <> {isSmallScreen && isButtonPressed ? (
    <animated.div style={props}>
      <Grid container item key='navItems' sm={12} direction="column" justifyContent="space-around" alignItems="center" style={{ gap: "0.5rem", padding: "0.5rem" }}>
        <LinksMenu links={links} />
      </Grid>
    </animated.div>
  ) : ""
  }</>
}


const NavItemsMediumScreen = ({ links }) => {
  const isSmallScreen = useSmallScreen();


  return <> {!isSmallScreen ? (
    <Grid container item key='navItems' md={10} justifyContent="flex-end" style={{ gap: "1rem" }}>
      <LinksMenu links={links} />
    </Grid>
  ) : ""
  }</>
}

const LinksMenu = ({ links }) => {
  const classes = useStyles();

  return <>
    {
      Object.entries(links).map(
        ([pageName, { text, url }]) => {
          return <Grid item key={pageName} >
            <NavLink exact to={url}
              className={isActive =>
                isActive ? classes.activeNavItemsStyling : classes.inActiveNavItemsStyling
              }>
              {text}
            </NavLink>
          </Grid >
        })
    }
  </>
}

function useSmallScreen() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { setIsButtonPressed } = useContext(NavContext);

  useEffect(() => {
    if (!isSmallScreen)
      setIsButtonPressed(false);
  })
  return isSmallScreen;
}


const ImageBox = ({ image: { imagePath, altText = "logo-default" } }) => (
  <Grid key="imgBox" item xs={6} md={2} style={{ textAlign: "right" }} >
    <img loading="lazy"
      src={imagePath}
      alt={altText}
    />
  </Grid>)
