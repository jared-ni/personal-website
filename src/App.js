import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <main id="home">
        <section className="hero" id="#">
          <HeroSection/>
        </section>
        <section className="about" id="about">
          <AboutMe/>
        </section>
        <section className="experience" id="experience">
          <Experience/>
        </section>
        <section className="work" id="work">
          <Project/>
        </section>
        <section className="contact" id="contact">
          <Contact/>
        </section>
      </main>
    </Router>
    </>

  );
}

export default App;
