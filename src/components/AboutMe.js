import React from 'react'
import '../App.css';
import { Button } from './Button';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className='about-container'>
        <div className='about-center-container'>
            <h1 className='aboutMe-h1'>About Me: </h1> 
            <div className='about-content'>
                <img className="aboutMeImage" src={process.env.PUBLIC_URL + '/images/jared_formal.jpeg'} />
                <p className='aboutMe-p'>
                    Hello! My name is Jared and I am a first-gen college student from Seattle, WA. 
                    I am a problem solver who loves designing and building software projects. My interest
                    in CS started in early high school after I flipped through the first three chapters of  
                    <i> Learning Python, 2nd Edition</i> in the book aisle of my local Goodwill. 
                    <br/><br/>
                    Fast forward to today, I have had the opportunity to explore my interests in software 
                    through a variety of projects, coureses and activities. Here are some of the technologies 
                    that I've been working with recently: 
                    <br />
                    <br /> &emsp; <i class="fa-solid fa-angle-right"></i> &nbsp; Java &nbsp; (Spring Framework)
                    &emsp; &emsp; <i class="fa-solid fa-angle-right"></i> &nbsp; Python
                    <br /> &emsp; <i class="fa-solid fa-angle-right"></i> &nbsp; JavaScript &nbsp; (React.js) &emsp;&nbsp;&nbsp;&nbsp;&thinsp;
                    &emsp; &emsp; <i class="fa-solid fa-angle-right"></i> &nbsp; Node.js
                    <br /> &emsp; <i class="fa-solid fa-angle-right"></i> &nbsp; MySQL &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&nbsp;&thinsp;
                    &emsp; &emsp; <i class="fa-solid fa-angle-right"></i> &nbsp; Firebase

                </p>
            </div>
            
        </div>
    </div>

  )
}

export default AboutMe