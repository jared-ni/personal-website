import '../../App.css';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import HeroSection from '../HeroSection';
import Project from '../Project';

function Home () {
    return (
        <>
            <div className="home-container">
                <HeroSection /> 
                <AboutMe />
                <Experience />
                <Project />
            </div>
        </>
    )
}

export default Home