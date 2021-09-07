import React, { createContext } from 'react';
import NavBar from './components/NavBar';
import Brand from './components/Brand';
import Services from './components/Services';
import Bytes from './components/Bytes';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Report from './components/Report';
import Achievements from './components/Achievements';
import ClientMessage from './components/ClientMessage';
import MailingList from './components/MailingList';
import { useReducer, useState } from 'react';
import specs from "./components/specs/home"
import Footer from "./components/Footer"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


export const PageContext = createContext()


const Home = ({ state }) => {
  return <React.Fragment>
    <HeroSection state={state.HeroSection} />
    <Brand state={state.Brand} />
    <Features state={state.Features} />
    <Services state={state.Services} />
    <Bytes state={state.Bytes} />
    <Report state={state.Report} />
    <Achievements state={state.Achievements} />
    <ClientMessage state={state.ClientMessage} />
    <MailingList state={state.MailingList} />

  </React.Fragment>
}

const About = ({ state }) => {
  return <React.Fragment>
    <Brand state={state.Brand} />
    <Bytes state={state.Bytes} />
    <Report state={state.Report} />
    <Achievements state={state.Achievements} />
    <ClientMessage state={state.ClientMessage} />
    <MailingList state={state.MailingList} />
  </React.Fragment>
}

function App() {
  // https://github.com/facebook/create-react-app/issues/1765

  const [state, setState] = useReducer(function (state, action) { }, specs);
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <PageContext.Provider value={{ page, setPage }}>
        <NavBar state={state.NavBar} />
      </PageContext.Provider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/home">
            <Home state={state} />
          </Route>
          <Route path="/about">
            <About state={state} />
          </Route>
          <Route path="/">
            <Home state={state} />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer state={state.Footer} />
    </div>
  );
}

export default App;
