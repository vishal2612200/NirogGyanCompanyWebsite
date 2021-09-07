import React, { createContext } from 'react';
import NavBar from './components/NavBar';
import { useReducer, useState } from 'react';
import specs from "./components/specs/state"
import Footer from "./components/Footer"
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


export const PageContext = createContext()

function App() {
  // https://github.com/facebook/create-react-app/issues/1765
 // BUG FIX: state is undefined , look in state.js and the corresponding state file of the component 
  const [state, setState] = useReducer(function (state, action) { }, { ...specsnavbar, ...specs, ...specsfooter });

  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <PageContext.Provider value={{ page, setPage }}>
        <NavBar state={state.NavBar} />
      </PageContext.Provider>

      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/home">
            <Home state={state.home} />
          </Route>
          <Route path="/about">
            <About state={state.about} />
          </Route>
          <Route path="/how-it-works">
            <HowItWorks state={state.howitworks} />
          </Route>       
          <Route path="/blog">
            <Blog state={state.blog} />
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
    </div>
  );
}

export default App;
