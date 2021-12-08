import NavBar from './components/NavBar';
import React, { useReducer, useState, createContext } from 'react';
import specs from "./components/specs/state"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/home';
import About from './components/about';
import HowItWorks from './components/howitworks';
import Blogs from './components/blogs';
import FAQS from './components/faqs';
import TermsOfServices from "./components/termsOfServices"
import PrivacyPolicy from "./components/privacyPolicy"

import specsFooter from "./components/specs/footer"
import specsNavbar from "./components/specs/navbar"
// import specsGetInTouch from "./components/specs/getintouch"
import specsSubscribe from "./components/specs/subscribe"

// import { makeStyles } from '@material-ui/core/styles';
// import Card from "@material-ui/core/Card";
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import Grid  from "@material-ui/core/Grid";
// import Box from '@material-ui/core/Box';
// import Skeleton  from "@material-ui/lab/Skeleton";

import Footer from './components/footer/Footer';
// import GetInTouch from "./components/getintouch/GetInTouch"
import Subscribe from "./components/subscribe/Subscribe"

// import review from "./components/codereview.gif"

export const PageContext = createContext()

/*  Links to read before reading the code
    
    https://stackoverflow.com/questions/61391830/sass-like-interpolation-in-material-ui-to-get-bem-like-classnames


*/

// const useStyles = makeStyles((theme) => ({
//   card: {
//     height: '60%'
//   },
//   media: {
//     height: '77vh',
//   },
//   section: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "77vh",
//     backgroundColor: "#001d30",
//     animation: `$changeBg 5s linear infinite`,
//   },
//   loadergif:{
//     width: "35%",
//     [theme.breakpoints.down('sm')]: {
//       width: "80%",
//     }
//   },
//   loader: {
//     // position: "absolute",
//     width: "150px",
//     height: "150px",
//     backgroundImage: "linear-gradient(to top, transparent 40%, #03a9f4)",
//     backgroundColor: "inherit",
//     borderRadius: "50%",
//     animation: `$rotate 1s linear infinite`,
//     // outline: 1px solid green;

//     "&::before": {
//       content: `""`,
//       position: "absolute",
//       inset: "20px 20px 0 0",
//       backgroundColor: "inherit",
//       borderRadius: "inherit",
//     },

//     "&::after": {
//       content: `""`,
//       position: "absolute",
//       color: "#03a9f4",
//       top: "50px",
//       right: "-8px",
//       width: "40px",
//       height: "40px",
//       backgroundColor: "currentcolor",
//       borderRadius: "inherit",
//       boxShadow: "0 0 4px, 0 0 16px, 0 0 32px, 0 0 48px, 0 0 96px",
//     }
//   },

//   "@keyframes rotate": {
//     "100%": {
//       transform: "rotate(1turn)"
//     }
//   },

//   "@keyframes changeBg": {
//     "100%": {
//       filter: "hue-rotate(1turn)"
//     }
//   }
// }));


function App() {
  // https://github.com/facebook/create-react-app/issues/1765
  // BUG FIX: state is undefined , look in state.js and the corresponding state file of the component 
  const [state,] = useReducer(function (state, action) { }, { ...specsNavbar, ...specs, ...specsFooter, ...specsSubscribe});
  const [page, setPage] = useState("home");
  // const [loading, setLoading] = useState("true");
  // const classes = useStyles();
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 300)
  // }, []);

  return (
    <div className="App">
      {/* {loading
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
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
          /> */}
          {/* <Skeleton animation="wave" variant="rect" className={classes.media} /> */}


          {/* <Box overflow="hidden">
               <Media loading /> 
            </Box> */}


          {/* <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" className={classes.media}>
            <img className={classes.loadergif} height="80%" src={review} alt="review" />
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
            </Grid> */}
            {/* <React.Fragment>
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment> */}
          {/* </CardContent>
        </Card>
        : */}
        <PageContext.Provider value={{ page, setPage }}>
          <NavBar state={state.NavBar} />

          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/home">
                <Home state={state.home} />
              </Route>
              <Route path="/about">
                <About state={state.about} >
                </About>
              </Route>
              <Route path="/how-it-works">
                <HowItWorks state={state.howitworks} >
                </HowItWorks>
              </Route>
              <Route path="/blogs">
                <Blogs state={state.blogs} >
                </Blogs>
              </Route>
              <Route path="/faqs">
                <FAQS state={state.faqs} />
              </Route>
              <Route path="/terms-of-services">
                <TermsOfServices state={state.termsOfServices} />
              </Route>
              <Route path="/privacy-policy">
                <PrivacyPolicy state={state.privacyPolicy} />
              </Route>

              <Route path="/">
                <Home state={state.home} />
              </Route>
            </Switch>
          </Router>
          <Subscribe state={state.Subscribe}/>
          <Footer state={state.Footer} />
        </PageContext.Provider>
      {/* } */}
    </div>
  );
}

export default App;
