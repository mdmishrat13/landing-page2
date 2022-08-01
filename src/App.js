import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Team from './components/Team/Team';
import Roadmap from './components/Roadmap/Roadmap';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Navbar/>
      <Hero/>
      <Team/>
      <Roadmap/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
