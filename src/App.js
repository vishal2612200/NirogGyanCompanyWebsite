import './App.css';
import NavBar from './components/NavBar';
import Brand from './components/Brand';
import Services from './components/Services';
import Bytes from './components/Bytes';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Report from './components/Report';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Brand />
      <Features />
      <Services />
      <Bytes />
      <Report />
      <Achievements />
    </div>
  );
}

export default App;
