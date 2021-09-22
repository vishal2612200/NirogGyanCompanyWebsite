import React, { createContext } from 'react';
import NavBar from './components/NavBar';
import { useReducer, useState, useEffect } from 'react';
import specs from "./components/specs/state"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/home';
import About from './components/about';
import HowItWorks from './components/howitworks';
import Blog from './components/blog';
import FAQS from './components/faqs';

import specsfooter from "./components/specs/footer"
import specsnavbar from "./components/specs/navbar"
import specsgetintouch from "./components/specs/getintouch"

import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
import { Card, CardHeader, CardContent, Grid, Box } from '@material-ui/core';
import { Skeleton } from "@material-ui/lab"
import Footer from './components/footer/Footer';
import GetInTouch from "./components/getintouch/GetInTouch"
=======
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import review from "./components/codereview.gif"
>>>>>>> vishal/master

export const PageContext = createContext()

/*  Links to read before reading the code
    
    https://stackoverflow.com/questions/61391830/sass-like-interpolation-in-material-ui-to-get-bem-like-classnames


*/

const useStyles = makeStyles((theme) => ({
  card: {
    height: '60%'
  },
  media: {
    height: '77vh',
    // height: '54vh',
  },
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "77vh",
    backgroundColor: "#001d30",
    animation: `$changeBg 5s linear infinite`,
  },

  loader: {
    // position: "absolute",
    width: "150px",
    height: "150px",
    backgroundImage: "linear-gradient(to top, transparent 40%, #03a9f4)",
    backgroundColor: "inherit",
    borderRadius: "50%",
    animation: `$rotate 1s linear infinite`,
    // outline: 1px solid green;

    "&::before": {
      content: `""`,
      position: "absolute",
      inset: "20px 20px 0 0",
      backgroundColor: "inherit",
      borderRadius: "inherit",
    },

    "&::after": {
      content: `""`,
      position: "absolute",
      color: "#03a9f4",
      top: "50px",
      right: "-8px",
      width: "40px",
      height: "40px",
      backgroundColor: "currentcolor",
      borderRadius: "inherit",
      boxShadow: "0 0 4px, 0 0 16px, 0 0 32px, 0 0 48px, 0 0 96px",
    }
  },

  "@keyframes rotate": {
    "100%": {
      transform: "rotate(1turn)"
    }
  },

  "@keyframes changeBg": {
    "100%": {
      filter: "hue-rotate(1turn)"
    }
  }
}));


function Media(props) {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.loader}></div>
    </section>

  );
}


function App() {
  // https://github.com/facebook/create-react-app/issues/1765
  // BUG FIX: state is undefined , look in state.js and the corresponding state file of the component 
  const [state,] = useReducer(function (state, action) { }, { ...specsnavbar, ...specs, ...specsgetintouch, ...specsfooter });

  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState("true");
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);

  return (
    <div className="App">
      { loading
          ?
          <Card className={classes.card}>
            <CardHeader
              avatar={
                  <Skeleton animation="wave" variant="circle" width={40} height={40} />
              }
              title={ 
                // 'Niroggyan'
                  <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
              }
              subheader={ <Skeleton animation="wave" height={10} width="40%" /> }
            />
            {/* <Skeleton animation="wave" variant="rect" className={classes.media} /> */}

            {/* <Box overflow="hidden">
               <Media loading /> 
            </Box> */}
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" className={classes.media}>
              <img width="80%" height="90%" src={review} alt="review" />
            </Grid>
             
          <CardContent>
            <Grid container wrap="nowrap">
              {Array.from(new Array(3)).map((item, index) => (
                <Box width="33%" marginRight={2} >
                  <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              ))}
            </Grid>
            {/* <React.Fragment>
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment> */}
          </CardContent>
        </Card>
        :
        <PageContext.Provider value={{ page, setPage }}>
          <NavBar state={state.NavBar} />

          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/home">
                <Home state={state.home} />
              </Route>
              <Route path="/about">
                <About state={state.about} >
                  <GetInTouch state={state.GetInTouch} />
                </About>
              </Route>
              <Route path="/how-it-works">
                <HowItWorks state={state.howitworks} >
                  <GetInTouch state={state.GetInTouch} />
                </HowItWorks>
              </Route>
              <Route path="/blog">
                <Blog state={state.blog} >
                  <GetInTouch state={state.GetInTouch} />
                </Blog>
              </Route>
              <Route path="/faqs">
                <FAQS state={state.faqs} />
              </Route>
              <Route path="/">
                <Home state={state.home} />
              </Route>
            </Switch>
          </Router>
          <Footer state={state.Footer} />
        </PageContext.Provider>
      }
    </div>
  );
}

export default App;
