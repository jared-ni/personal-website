import '../../App.css';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import HeroSection from '../HeroSection';
import Project from '../Project';
import Contact from '../Contact';
import Credit from '../Credit';

function Home () {
    return (
        <>
            <div className="home-container">
                <HeroSection /> 
                <AboutMe />
                <Experience />
                <Project />
                <Contact />
                <Credit />
            </div>
        </>
    )
}

export default Home