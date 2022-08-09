import '../../App.css';
import AboutMe from '../AboutMe';
import HeroSection from '../HeroSection';

function Home () {
    return (
        <>
            <div className="home-container">
                <HeroSection /> 
                <AboutMe />
            </div>
        </>
    )
}

export default Home