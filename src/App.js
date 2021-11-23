// import NavBar from './components/NavBar';
import React, { Suspense, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import appState from "./components/specs/state"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect

} from "react-router-dom";

// import { makeStyles } from '@material-ui/core/styles';
// import Card from "@material-ui/core/Card";
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import Grid  from "@material-ui/core/Grid";
// import Box from '@material-ui/core/Box';
// import Skeleton  from "@material-ui/lab/Skeleton";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Subscribe from "./components/subscribe/Subscribe";


/*  Links to read before reading the code    
    https://stackoverflow.com/questions/61391830/sass-like-interpolation-in-material-ui-to-get-bem-like-classnames
*/

function App() {
  // https://github.com/facebook/create-react-app/issues/1765
  // BUG FIX: state is undefined , look in state.js and the corresponding state file of the component 


  const [state,] = useState({ ...appState });

  const navLinks = Object.entries(state.pages)
    .filter(([_, { self: { onNavbar } }]) => onNavbar)
    .map(([pageName, { self: { url, text }, subLinks }]) => ([pageName, { text, url, subLinks }]));

  return <div className="App">
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar state={{ ...state.components.navbar, links: Object.fromEntries(navLinks) }} />
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          {
            Object.entries(state.pages).map(([pageName, pageData]) => {
              const { url } = pageData.self;
              const Component = React.lazy(() => import(`./components/${pageName}`));
              return <Route key={url} path={url}
                render={(props) => <Component {...props} state={pageData} />} />
            })}
          <Redirect from="/" to="/home" />
        </Switch>
      </Suspense>
      <Subscribe state={state.components.subscribe} />
      <Footer state={state.components.footer} />
    </Router>
  </div>
}


export default App;
