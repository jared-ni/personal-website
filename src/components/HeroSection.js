import React from 'react'
import '../App.css';
import './HeroSection.css';
import bridgeImage from '../images/bridge.jpeg';

function HeroSection() {
  return (
    <div className='hero-container' id="/">
        <div className='hero-center-container'>
        <div className="heroImage-wrapper" data-aos="fade-up">
            <img className="heroImage" src={bridgeImage} alt="Jared Ni"  />
        </div>
        <h1 className="hero-h1">Hello World, my name is</h1> 
        <p>Jared Ni</p>
        <div className="pp">
            I am a first-generation college student studying Computer Science, Economics, and Molecular and Cellular Biology at Harvard. 
            I'm passionate about leveraging technology to improve the lives of others. 
            Currently, I'm working on: 
        </div>
        <div className="pp-points-container">
            <div className="pp-points"> 
                Software Engineering project at Salesforce, improving data security for organizations
                    &nbsp; <i class="fa-solid fa-user-shield"></i>
            </div>
            <div className="pp-points"> 
                Machine Learning research at Harvard Edge Computing Lab, creating a reinforcement framework for computer architectural design
                    &nbsp; <i class="fa-solid fa-brain"></i>
            </div>
            <div className="pp-points">
                Systems Oncology Research at Mass-General, correlating morphology with treatment resistance in pancreatic cancer cells
                    &nbsp; <i class="fa-solid fa-dna"></i>
            </div>
            <div className="pp-points"> 
                Teaching CS61: Systems Programming and Machine Organization at Harvard, as Teaching Fellow
                    &nbsp; <i class="fa-solid fa-computer"></i>
            </div>
        </div>
        </div>
    </div>

  )
}

export default HeroSection