import React from 'react'
import '../App.css';
import './Experience.css';
import Napchat from '../images/napchat.png';

function Project() {


  return (
    <div className="project-container">
        <div className="project-center-container">
            <h1 className='project-h1'>
                Noteworthy Projects:  
            </h1>

            <div className="project-table">

                <li>
                    <a href="https://thenapchat.herokuapp.com/" target="_blank"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={Napchat}/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <a className="project-card-name">
                                    Napchat
                                </a>
                                <div className="project-card-buttons">
                                    <i class="fa-brands fa-github"></i>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                Python&emsp;HTML&emsp;CSS&emsp;Firebase&emsp;Heroku
                            </div>
                            <div className="project-card-description">
                                A social media web app that encourages healthy sleep schedules by allowing users to log sleep hours and compete with friends for weekly sleep score rankings.
                            </div>
                        </div>
                    </a>
                </li>


                <div className="project-card">project2</div>
                <div className="project-card">project3</div>


                
            </div>
        </div>
    </div>
  )
}

export default Project