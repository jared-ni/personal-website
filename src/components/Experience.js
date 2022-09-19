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
                        className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(7)}>
                        Fidelity Investments
                    </div>
                    <div 
                        className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(6)}>
                        HCS Tech for Social Good
                    </div>
                    <div 
                        className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(5)}>
                        Harvard CS Department
                    </div>
                    <div 
                        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(4)}>
                        Arda
                    </div>
                    <div 
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}>
                        Datamatch
                    </div>
                    <div 
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}>
                        The Harvard Crimson
                    </div>
                    <div 
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}>
                        Pathway STEM Camp
                    </div>
                </div>
                <div className="experience-content-container">
                    <div className={toggleState === 7 ? "content active-content" : "content"}>
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
                            Created Java Spring Boot backend service that channels conversational data and research notes published
                            in Microsoft Teams into a database to display on an internal UI in real-time to thousands of employees.
                        </div>
                        <div className="experience-content-description"> 
                            Exponentially improved time efficiency of data delivery by designing and implementing a multi-threaded
                            bash process for data fetching and processing, reducing scheduler runtime by more than 40 seconds.
                        </div>
                        <div className="experience-content-description">
                            Configured CI/CD pipeline using Jenkins and Karate testing framework.
                        </div>
                        <div className="experience-content-description">
                            Improved project code coverage through writing 500+ lines of Junit and automation tests.
                        </div>
                    </div>
                    <div className={toggleState === 6 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            Software Engineer
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://socialgood.hcs.harvard.edu/" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    Harvard Tech for Social Good
                                </a>
                            </span>
                        </div>

                        <div className="experience-content-date">
                            Sept. 2022 — Present
                        </div>
                        <div className="experience-content-description">
                            Partnered with&nbsp;
                            <a href="https://okayso.org/" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                OkaySo
                            </a>
                            : Developing a full-stack web portal with React and Node.js that connects thousands of young adult users with
                            OkaySo’s trusted experts.
                        </div>
                        <div className="experience-content-description">
                            App allows users to communicate confidentially in real-time and receive expert advice
                            on topics related to identity, relationships, and mental and physical health.
                        </div>
                    </div>
                    <div className={toggleState === 5 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            CS Course Assistant
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://cs50.harvard.edu/college/2022/fall/" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    CS50: Introduction to Computer Science
                                </a>
                            </span>
                        </div>
                        <div className="experience-content-date">
                            Aug. 2022 — Present
                        </div>
                        <div className="experience-content-description">
                            Host tutorials and office hours for 30+ undergraduate students weekly, teaching core CS concepts such as
                            algorithms and data structures and helping students develop algorithmic thinking using C and Python.
                        </div>
                    </div>
                    <div className={toggleState === 4 ? "content active-content" : "content"}>
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
                            Worked on Arda Deliver, an android app that allows medical clinics to request and track vaccine orders.
                        </div>
                        <div className="experience-content-description">
                            App received $70k in initial funding and is currently being tested by The Gambian Ministry of Health.
                        </div>
                        <div className="experience-content-description">
                            Engineered map layout using Mapbox SDK and implemented real-time tracking of drone-delivered orders
                            using drones’ GPS coordinates.
                        </div>
                        <div className="experience-content-description">
                            Designed most of the UI/UX by utilizing Figma and built app layouts using Java.
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
                            Engineered a survey-based matchmaking service used by students at Harvard and 42 other colleges.
                        </div>
                        <div className="experience-content-description">
                            App generated 235k matches and had 52k active users in 2022.
                        </div>
                        <div className="experience-content-description">
                            Implemented the business logic and frontend of the chat and search box components using React, built
                            database infrastructure with Firebase Cloud Functions.
                        </div>
                        <div className="experience-content-description">
                            Designed and engineered a post-survey feedback feature that improves user interaction and enables
                            sharing of survey results directly to social media sites.
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content active-content" : "content"}>
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
                            Helped upgrade the website to the latest versions of Django and React. Debugged 100+ dependency-related errors and refactored components using best engineering practices.
                        </div>
                    </div>
                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            Project Organizer
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://kawnchess.wixsite.com/stemcamp" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    Pathway STEM Camp
                                </a>
                            </span>
                        </div>
                        <div className="experience-content-date">
                            May 2020 — Sept. 2020
                        </div>
                        <div className="experience-content-description">
                            Launched a free, virtual summer camp in 2020 for low-income middle and high school students in the Greater Seattle Area.
                        </div>
                        <div className="experience-content-description">
                            Organized classes for 50 students, developed curriculums for Python, math, and natural sciences, and tutored students throughout the week for three months.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience