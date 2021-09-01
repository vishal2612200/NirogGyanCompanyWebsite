import NavBar from './components/NavBar';
import Brand from './components/Brand';
import Services from './components/Services';
import Bytes from './components/Bytes';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Report from './components/Report';
import Achievements from './components/Achievements';
import { useReducer } from 'react';
import specs from "./components/specs/state"
import progressJS from "progress"

function App() {

  const [state, setState] = useReducer(function (state, action) { }, specs);

  return (
    <div className="App">
      <NavBar state={state.NavBar} />
      <HeroSection state={state.HeroSection} />
      <Brand state={state.Brand} />
      {/*<Features state={state.Features} />
      <Services state={state.Services} />
      <Bytes state={state.Bytes} />
      <Report state={state.Report} />
      <Achievements state={state.Achievements} /> */}
    </div>
  );
}

export default App;
