
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Conocimientos from './components/Conocimientos';
import About from './components/About';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Carouselito from './components/Carousel';
import Contacto from './components/Contacto';
function App() {
  return (
      
    <Router>
      <NavBar/>
      <Hero/>
      <Carouselito/>
      <Proyectos/>
      <Conocimientos/>
      <About/>
      <Contacto/>
      <Footer/>
    </Router>
  );
}

export default App;
