import React, { useState, useContext, createContext, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSpring, animated } from 'react-spring'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
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
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  inActiveNavItemsStyling: {
    textAlign: "center",
    textDecoration: "none",
    fontSize: "1.25rem",
    margin: "8px 11px",
    padding: "1px 17px",
    color: "#5089B0",
    display: "block",

    '&:hover': {
      color: "#fff",
      backgroundColor: "#163b76",

      borderRadius: "25px",
    },
  },
  activeNavItemsStyling: {
    fontSize: "1.25rem",
    display: "block",
    textAlign: "center",
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#163b76",
    padding: "1px 17px",
    borderRadius: "25px",
    margin: "8px 13px"

  },
  dropdown: {
    borderRadius: "10px",
    position: "absolute",
    background: "#fff",
    zIndex: 1000,
    transform: "translate(-10%, 60%)",
    width: "max-content"
  },
  iconButton: {
    color: "#7a7878",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#163b76"
    }

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
            <Grid container justifyContent="space-between" >
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
      <Grid container item sm={12} direction="column" justifyContent="space-around" alignItems="center" style={{ gap: "0.5rem", padding: "0.5rem" }}>
        <NavLinksMenu links={links} />
      </Grid>
    </animated.div>
  ) : ""
  }</>
}


const NavItemsMediumScreen = ({ links }) => {
  const isSmallScreen = useSmallScreen();
  return <> {!isSmallScreen &&
    <Grid container item style={{ width: "max-content" }} >
      <NavLinksMenu links={links} />
    </Grid>
  }</>
}

const NavLinksMenu = ({ links }) => {
  return <>
    {
      Object.values(links).map(({ text, url, subLinks }, index) => <NavItem key={index} text={text} url={url} subLinks={subLinks} />)
    }
  </>
}


const NavItem = ({ text, url, subLinks }) => {

  const classes = useStyles();
  const [overButton, setOverButton] = useState(false);
  const [overMenu, setOverMenu] = useState(false);

  const SubMenu = ({ subLinks }) => <Grid container direction="column" className={classes.dropdown}
    onMouseEnter={() => setOverMenu(true)}
    onMouseLeave={() => setOverMenu(false)}
  >
    {subLinks.map(({ text, url: suburl }, index) => <SubLink key={index} url={suburl} text={text} />)}
  </Grid>

  const SubLink = ({ url, text }) => <Grid item>
    <NavLink exact to={url} className={
      isActive =>
        isActive ? classes.activeNavItemsStyling : classes.inActiveNavItemsStyling
    }>
      {text}
    </NavLink>
  </Grid>


  return <Grid container item style={{ width: "max-content" }} justifyContent="center" alignItems="center">
    <Grid item>
      <NavLink to={url}
        className={isActive => isActive ? classes.activeNavItemsStyling : classes.inActiveNavItemsStyling} >
        {text}
      </NavLink>
    </Grid>
    <Grid item style={{ transform: "translateX(-70%)" }}>
      {
        subLinks &&
        <IconButton size="small" className={classes.iconButton}
          onMouseEnter={() => setOverButton(true)}
          onMouseLeave={() => setOverButton(false)}
        >

          <ExpandMoreIcon />
        </IconButton>
      }
    </Grid>
    {(overButton || overMenu) && subLinks && <SubMenu subLinks={subLinks} />}
  </Grid>

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
  <Grid item xs={6} md={2} style={{ textAlign: "right" }} >
    <img loading="lazy"
      src={imagePath}
      alt={altText}
    />
  </Grid>)
