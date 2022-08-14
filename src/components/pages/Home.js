import '../../App.css';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import HeroSection from '../HeroSection';

function Home () {
    return (
        <>
            <div className="home-container">
                <HeroSection /> 
                <AboutMe />
                <Experience />
            </div>
        </>
    )
}

export default Home