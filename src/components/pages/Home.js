import '../../App.css';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import HeroSection from '../HeroSection';
import Project from '../Project';
import Contact from '../Contact';

function Home () {
    return (
        <>
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
        </>
    )
}

export default Home