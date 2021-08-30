import './App.css';
import NavBar from './components/NavBar';
import Brand from './components/Brand';
import Services from './components/Services';
import Bytes from './components/Bytes';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Report  from './components/Report';
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Brand />
      <Features />
      <Services />
      <Bytes />
      <Report />/
    </div>
  );
}

export default App;
