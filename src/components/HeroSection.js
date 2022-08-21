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
        <p>Jared Ni.</p>
        <div className="pp">I am a rising sophomore at Harvard studying computer science and economics, 
            and my passion is building accessible and transformative software products. 
            Here are some interesting facts about me: 
        </div>
        <div className="pp-points-container">
            <div className="pp-points"> 
                I helped build a college matchmaking app used by 50k students 
                    &nbsp; <i class="fa-solid fa-heart"></i> 
            </div>
            <div className="pp-points"> 
                I designed and programmed the frontend of a mobile drone-delivery app at a start-up 
                    &nbsp; <i class="fa-solid fa-helicopter"></i>
            </div>
            <div className="pp-points">
                Favorite Harvard course so far: CS20 Discrete Mathematics for Computer Science &nbsp; <i class="fa-solid fa-share-nodes"></i>
            </div>
        </div>
        </div>
    </div>

  )
}

export default HeroSection