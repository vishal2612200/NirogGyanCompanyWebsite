import './App.css';
import NavBar from './components/NavBar';
import Brand from './components/Brand';
import Services from './components/Services';
import Bytes from './components/Bytes';
import HeroSection from './components/HeroSection';
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Brand />
      <Services />
      <Bytes />
    </div>
  );
}

export default App;
