import React from 'react'
import '../App.css';
import './AboutMe.css';
import lakeImage from '../images/near_lake.jpeg';
import "aos/dist/aos.css";

function AboutMe() {

  return (
    <div className='about-container'>
        <div className='about-center-container'>
            <h1 className='aboutMe-h1' data-aos="fade-up">About Me: </h1>
            <div className='about-content'>
                    <div className="aboutMeImage-wrapper-container" data-aos="fade-up">
                        <div className="aboutMeImage-wrapper" style={{ backgroundImage: "url(" + lakeImage + ")"}}>
                    </div>
                </div>
                <div className='aboutMe-p' data-aos="fade-up">
                    Hello! My name is Jared and I am a first-gen college student from Seattle, WA. 
                    I am a creative problem solver who loves designing and building software projects. My journey
                    in CS started in early high school, after purchasing my first programming book (<i>Learning Python, 2nd Edition</i>) 
                    from the local Goodwill because I had fun reading it in the book aisle. 
                    <br/><br/>
                    Fast forward to today, I have had the opportunity to explore my interests in software 
                    through a variety of courses, projects and internships. Here are some of the technologies 
                    that I've been working with recently: 
                    <br />
                    <ul class="technology-list">
                        <li>
                            Java (Spring)
                        </li>
                        <li>
                            Python
                        </li>
                        <li>
                            JavaScript (React.js)
                        </li>
                        <li>
                            Node.js
                        </li>
                        <li>
                            MySQL
                        </li>
                        <li>
                            Firebase
                        </li>
                    </ul>

                </div>
            </div>
            
        </div>
    </div>

  )
}

export default AboutMe