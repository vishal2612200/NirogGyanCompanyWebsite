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

export const PageContext = createContext()

function App() {

  const [state, setState] = useReducer(function (state, action) { }, specs);
  const [page, setPage] = useState("home");
  let pageData;
  switch (page) {

    case "about":
      pageData = (<React.Fragment>
        <Brand state={state.Brand} />

      </React.Fragment>)
      break;
    default:
      pageData = (<React.Fragment >
        <HeroSection state={state.HeroSection} />
        <Brand state={state.Brand} />
        <Features state={state.Features} />
        <Services state={state.Services} />
        <Bytes state={state.Bytes} />
        <Report state={state.Report} />
        <Achievements state={state.Achievements} />
        <ClientMessage state={state.ClientMessage} />
        <MailingList state={state.MailingList} />
      </React.Fragment>)
  }

  return (
    <div className="App">
      <PageContext.Provider value={{ page, setPage }}>
        <NavBar state={state.NavBar} />
      </PageContext.Provider>
      {pageData}
      <Footer state={state.Footer} />
    </div>
  );
}

export default App;
