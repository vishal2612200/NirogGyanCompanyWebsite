import React, { useState, useContext, createContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, IconButton, AppBar, Toolbar, Typography, Grid, useTheme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useMediaQuery } from "@material-ui/core";
import { useSpring, animated } from 'react-spring'
import { PageContext } from "../App";


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
  }
}));


const NavContext = createContext();

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
              <ImageBox imgPath={navBar.logoImg} />
              <MenuOpenButton />
              <NavItemsMediumScreen links={navBar.navLinks} />
            </Grid>

          </Toolbar>
          {
            <NavItemsSmallScreen links={navBar.navLinks} />

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

  let navItems = useNavItems(links);

  return <> {isSmallScreen && isButtonPressed ? (
    <animated.div style={props}>
      <Grid container item key='navItems' sm={12} direction="column" justifyContent="flex-start" alignItems="center">
        {navItems}
      </Grid>
    </animated.div>
  ) : ""
  }</>
}


const NavItemsMediumScreen = ({ links }) => {
  const isSmallScreen = useSmallScreen();

  let navItems = useNavItems(links);

  return <> {!isSmallScreen ? (
    <Grid container item key='navItems' spacing={7} md={10} justifyContent="flex-end">
      {navItems}
    </Grid>
  ) : ""
  }</>
}

function useNavItems(links) {
  const { activeLinkIndex, setActiveLinkIndex } = useContext(NavContext);
  const { setPage } = useContext(PageContext);
  return links.map(
    ({ text, id }, index) => {
      return <Grid item key={index} >
        <Link href={process.env.PUBLIC_URL +  `/${id}`}
          onClick={
            () => {
              setActiveLinkIndex(index)
              setPage(id)
            }
          }
          underline={activeLinkIndex === index ? "always" : "none"}
          style={{ textDecoration: 'none' }}>
          <Typography
            variant="h6"
            // eslint-disable-next-line eqeqeq
            color={activeLinkIndex == index ? "primary" : "textSecondary"}>
            {text}
          </Typography>
        </Link>
      </Grid>;
    });
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


const ImageBox = ({ imgPath }) => (
  <Grid  key='imgBox' item xs={6} md={2} style={{textAlign:"right"}}>
    <img
      src={imgPath}
      alt="Logo"
    />
  </Grid>)
