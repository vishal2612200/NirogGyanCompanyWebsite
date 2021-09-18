import React, { createContext } from 'react';
import NavBar from './components/NavBar';
import { useReducer, useState } from 'react';
import specs from "./components/specs/state"
import Footer from "./components/Footer"
import GetInTouch from "./components/GetInTouch"
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

export const PageContext = createContext()

/*  Links to read before reading the code
    
    https://stackoverflow.com/questions/61391830/sass-like-interpolation-in-material-ui-to-get-bem-like-classnames


*/

function App() {
  // https://github.com/facebook/create-react-app/issues/1765
  // BUG FIX: state is undefined , look in state.js and the corresponding state file of the component 
  const [state,] = useReducer(function (state, action) { }, { ...specsnavbar, ...specs, ...specsgetintouch, ...specsfooter });

  const [page, setPage] = useState("home");

  return (
    <div className="App">
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

    </div>
  );
}

export default App;
