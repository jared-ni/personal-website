import React from 'react'
import '../App.css';
import './Project.css';
import { useState } from 'react';


function Experience() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className='experience-container'>
        <div className='experience-center-container'>
            
            <h1 className='experience-h1' data-aos="fade-up">
                Experience: 
            </h1>

            <div className="experience-table" data-aos="fade-up">
                <div className="experience-tabs-container">
                    <div 
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}>
                        Fidelity Investments
                    </div>
                    <div 
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}>
                        Arda
                    </div>
                    <div 
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}>
                        Datamatch
                    </div>
                    <div 
                        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(4)}>
                        The Harvard Crimson
                    </div>
                </div>
                <div className="experience-content-container">
                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            Software Engineer Intern 
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://www.fidelity.com/" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    Fidelity Investments
                                </a>
                            </span>
                        </div>

                        <div className="experience-content-date">
                            June 2022 — Aug. 2022 
                        </div>
                        <div className="experience-content-description">
                            Created Java Spring backend service that fetches and processes channels, members, and conversations data from Microsoft Teams to store into the database and display on the company UI to wider groups of users in real time
                        </div>
                        <div className="experience-content-description"> 
                            Designed and implemented multi-threaded scheduler bash processes that exponentially increased the time efficiency of data delivery.
                        </div>
                        <div className="experience-content-description">
                            Configured automation testing and Java Code Integration for the service using the Karate framework, established CI/CD pipeline; wrote extensive JUnit and endpoint tests to ensure code quality and coverage.
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            Android Software Developer
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://www.ardaimpact.com/" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    Arda
                                </a>
                            </span>
                        </div>
                        <div className="experience-content-date">
                            Oct. 2021 — May 2022 
                        </div>
                        <div className="experience-content-description">
                            Worked on Arda Deliver, a mobile healthcare application that allows clinics in rural Gambia to request vaccine supplies within the national healthcare supply chain and track the progress of vaccine drone deliveries. 
                        </div>
                        <div className="experience-content-description">
                            Built frontend components and layouts using Java and Kotlin, designed UI/UX using Figma, and worked with user authentication and data storage using AWS Amplify. 
                        </div>
                    </div>
                    <div className={toggleState === 3 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            Software Developer
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://datamatch.me/" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    Datamatch
                                </a>
                            </span>
                        </div>
                        <div className="experience-content-date">
                            Oct. 2021 — April 2022 
                        </div>
                        <div className="experience-content-description">
                            Built a survey-based matchmaking service for students at Harvard and 42 other colleges. Generated 235k matches and had 52k active users in 2022.
                        </div>
                        <div className="experience-content-description">
                            Implemented the business logic and frontend of the chat and user search components using React, built database infrastructure with Firebase Cloud Functions.
                        </div>
                        <div className="experience-content-description">
                            Designed and engineered the “Red Flags” feature that improves user interaction by providing post-survey feedback and enabling sharing of survey results directly to social media sites. 
                        </div>
                    </div>
                    <div className={toggleState === 4 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            Technology Associate
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://www.thecrimson.com/" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    The Harvard Crimson
                                </a>
                            </span>
                        </div>
                        <div className="experience-content-date">
                            Oct. 2021 — Present
                        </div>
                        <div className="experience-content-description">
                            Implement an array of features for the Harvard Crimson website and subscription service, including minigames, chatbots, and surveys.
                        </div>
                        <div className="experience-content-description">
                            Helped updgrade the website to the latest versions of Django and React. Debugged 100+ dependency-related errors and refactored components using best engineering practices.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience