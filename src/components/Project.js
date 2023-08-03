import React from 'react'
import '../App.css';
import './Experience.css';
import MyWebsite from '../images/my-website.png';
import Napchat from '../images/napchat.png';
import Datamatch from '../images/datamatch.png';
import MiniML from '../images/miniML.png';
import MRI from '../images/MRI.jpeg';
import STRESS from '../images/STRESS.png';
import archgym from '../images/archgym.png';

function Project() {


  return (
    <div className="project-container">
        <div className="project-center-container">
            <h1 className='project-h1' data-aos="fade-up">
                Noteworthy Projects:  
            </h1>

            <div className="project-table" data-aos="fade-up">
                <li>
                    <a href="https://github.com/jared-ni/oss-arch-gym" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={archgym} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    Arch Gym - Astra-sim
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/jared-ni/oss-arch-gym" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                Python&emsp;OpenAI Gym&emsp;Shell
                            </div>
                            <div className="project-card-description">
                                Gym Environment for ML agents and a deep learning simulator to study architectural design space exploration.
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jared-ni" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={MRI} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    Brain Tumor Diagnosis and Classification Model
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/jared-ni" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                TensorFlow&emsp;Python&emsp;Convolutional Neural Network
                            </div>
                            <div className="project-card-description">
                                Diagnoses and classifies brain tumors using patient MRI data with 97% accuracy.
                            </div>
                        </div>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/jared-ni/STRESS-cs262-final" target="_blank" rel="noreferrer"
                        className="project-card">
                        <div className="project-card-logo-wrapper">
                            <img className="project-card-logo" src={STRESS} alt="project preview"/>
                        </div>
                        
                        <div className="project-card-overlay">
                            <div className="project-card-header">
                                <div className="project-card-name">
                                    Stationary T-Stop Railing Emergency Siren System (STRESS)
                                </div>
                                <div className="project-card-buttons">
                                    <a href="https://github.com/jared-ni/STRESS-cs262-final" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github project-card-button-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-tech">
                                Python&emsp;C++&emsp;gPRC&emsp;Arduino
                            </div>
                            <div className="project-card-description">
                                Distributed client-server system to ensure railway safety and prevent tragedies.
                            </div>
                        </div>
                    </a>
                </li>

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
                                React.js&emsp;CSS&emsp;Firebase&emsp;Netlify
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