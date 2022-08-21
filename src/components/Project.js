import React from 'react'
import '../App.css';
import './Experience.css';
import MyWebsite from '../images/my-website.png';
import Napchat from '../images/napchat.png';
import Datamatch from '../images/datamatch.png';
import MiniML from '../images/miniML.png';

function Project() {


  return (
    <div className="project-container">
        <div className="project-center-container">
            <h1 className='project-h1' data-aos="fade-up">
                Noteworthy Projects:  
            </h1>

            <div className="project-table" data-aos="fade-up">
                <li>
                    <a href="https://jaredni.com" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={MyWebsite} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    Personal Website
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/milkteadj/personal-website" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                React.js&emsp;CSS&emsp;MongoDB&emsp;Netlify
                            </div>
                            <div className="project-card-description">
                                Designed and Built by Jared Ni — Welcome to my personal website!
                            </div>
                        </div>
                    </a>
                </li>

                <li>
                    <a href="https://datamatch.me/" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={Datamatch} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    Datamatch 2022
                                </div>
                                <div className="project-card-buttons">
                                    <i class="fa-solid fa-lock"></i>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                React.js&emsp;CSS&emsp;Firebase&emsp;Heroku
                            </div>
                            <div className="project-card-description">
                                A survey-based matchmaking service for students at Harvard and 42 other colleges. Generated 235k matches and had 52k active users in 2022.                            
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://thenapchat.herokuapp.com/" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={Napchat} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    Napchat
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/milkteadj/napchat" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
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
                <li>
                    <a href="https://github.com/milkteadj/OCaml-interpreter" target="_blank" rel="noreferrer" className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={MiniML} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    OCaml Interpreter
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/milkteadj/OCaml-interpreter" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                OCaml&emsp;Makefile&emsp;LaTex
                            </div>
                            <div className="project-card-description">
                                An interpreter for MiniML, a functional, Turing-complete subset of the OCaml language that has both concrete and abstract syntax and is capable of evaluating basic functional operations. The project includes a lexical analyzer, a parser, and an interpreter.
                            </div>
                        </div>
                    </a>
                </li>

            </div>
        </div>
    </div>
  )
}

export default Project