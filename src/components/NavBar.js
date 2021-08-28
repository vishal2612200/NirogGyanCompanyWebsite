import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, IconButton, AppBar, Toolbar, Typography, Box, useTheme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    width: "100%",
    padding: "0rem 0rem 0rem 3rem",
    fontFamily: 'arial',
    justifyContent: "space-around",
    alignItems: "center",
  },
  imgBox: {
    display: "flex",
    flex: "2 1 auto",
    justifyContent: "flex-start",
  },
  navItemsBox: {
    flex: "3 1 auto",
    display: "flex",
    justifyContent: "space-evenly",
  

  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));


export default function NavBar() {
  const classes = useStyles();

  const [selected, setSelected] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  let navBarItems;

  if (isSmallScreen) {
    navBarItems = (<IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
      <MenuIcon />
    </IconButton>)
  }
  else {
    const navItems = ["Home", "About Us", "How It Works", "Blog", "FAQs"];
    navBarItems = (
      navItems.map((text, index) => (
        // eslint-disable-next-line eqeqeq
        <Link key={index} onClick={() => setSelected(index)} underline={selected === index ? "always" : "none"}>
          <Typography
            variant="h6"
            // eslint-disable-next-line eqeqeq
            color={selected == index ? "primary" : "textSecondary"}
            className={classes.title}
          >
            {text}
          </Typography>
        </Link>
      )));
  }


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#ffffff" }}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.imgBox}>
            <img
              src={process.env.PUBLIC_URL + "/logo-icon.png"}
              alt="Broken"
              className={classes.imgLogo}
            />
          </Box>
          <Box className={classes.navItemsBox}>
            {navBarItems}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
