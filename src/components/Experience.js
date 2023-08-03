import React from 'react'
import '../App.css';
import './Project.css';
import { useState } from 'react';

function Experience() {

    const [toggleState, setToggleState] = useState(7);

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
                        className={toggleState === 10 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(7)}>
                        Salesforce
                    </div>
                    <div 
                        className={toggleState === 9 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(7)}>
                        Harvard Edge Computing Lab
                    </div>
                    <div 
                        className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(7)}>
                        Harvard University CS61
                    </div>
                    <div 
                        className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(7)}>
                        Datamatch
                    </div>
                    <div 
                        className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(6)}>
                        Harvard University CS50
                    </div>
                    <div 
                        className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(5)}>
                        Fidelity Investments
                    </div>
                    <div 
                        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(4)}>
                        Arda Impact
                    </div>
                    <div 
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}>
                        Harvard Tech for Social Good
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
                    <div className={toggleState === 10 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            Software Engineer Intern 
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://www.salesforce.com/" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    Salesforce
                                </a>
                            </span>
                        </div>
                        <div className="experience-content-date">
                            June 2023 — Aug. 2023
                        </div>
                        <div className="experience-content-description">
                            Architected the integration of a runtime vulnerability scanner into cloud security infrastructure, 
                             utilizing Docker to containerize API for scalable runtime vulnerability testing of hundreds of Salesforce web domains.
                        </div>
                        <div className="experience-content-description"> 
                            Engineered scanner executor and receiver libraries interfaced with AWS to perform security scans, 
                            generating 50+ Gigabytes of alert data weekly to help product teams identify and patch app vulnerabilities and 
                            ensure the safety of customer data.
                        </div>
                        <div className="experience-content-description">
                            Creating a robust data pipeline parser that cleans and sanitizes data for training machine learning models focused on security detection, analysis, and assessment.
                        </div>
                    </div>

                    <div className={toggleState === 9 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            Machine Learning Research Assistant
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://github.com/srivatsankrishnan/oss-arch-gym" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    Harvard Edge Computing Lab
                                </a>
                            </span>
                        </div>

                        <div className="experience-content-date">
                            Feb. 2023 — Present
                        </div>
                        <div className="experience-content-description">
                            Created an OpenAI Gym Environment for incorporating ML agents and a distributed deep learning simulator 
                            to study architectural design space exploration, navigating more than 10^51 combinations of parameters.
                        </div>
                        <div className="experience-content-description"> 
                            Engineered and incorporated a variety of bio-inspired, probabilistic, and reinforcement learning algorithms as environment agents.
                        </div>
                        <div className="experience-content-description">
                            Conducting experiments on the accuracy of ML agents using manually-calculated results as benchmarks.
                        </div>
                    </div>

                    <div className={toggleState === 8 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            Teaching Fellow
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://cs61.seas.harvard.edu/" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    CS 61: Systems Programming and Machine Organization
                                </a>
                            </span>
                        </div>

                        <div className="experience-content-date">
                            Aug. 2023 — Present
                        </div>
                        <div className="experience-content-description">
                            Come back later for more details!
                        </div>
                    </div>

                    <div className={toggleState === 7 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            Team Lead
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://datamatch.me/" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    Datamatch
                                </a>
                            </span>
                        </div>
                        <div className="experience-content-date">
                            Oct. 2021 — Present
                        </div>
                        <div className="experience-content-description">
                            Co-led a team of 20 developers for the largest college matchmaking app in the US, with 52k users and 235k matches.
                        </div>
                        <div className="experience-content-description">
                            Engineered messaging, authentication, and various landing pages using React and Firebase Cloud Functions.
                        </div>
                        <div className="experience-content-description">
                            Implemented social media integration using graph APIs, enabling thousands to share to various social media sites directly.
                        </div>
                    </div>


                    <div className={toggleState === 6 ? "content active-content" : "content"}>
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
                            Aug. 2022 — Dec. 2022
                        </div>
                        <div className="experience-content-description">
                            Host tutorials and office hours for 30+ undergraduate students weekly, teaching core CS concepts such as
                            algorithms and data structures and helping students develop algorithmic thinking using C and Python.
                        </div>
                    </div>


                    <div className={toggleState === 5 ? "content active-content" : "content"}>
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
                            Migrated proprietary research data accessed by hundreds of financial analysts from 500+ Microsoft Teams 
                            channels to AWS cloud by creating a Java Spring Boot service with 90%+ code coverage and automated CI/CD pipeline.
                        </div>
                        <div className="experience-content-description"> 
                            Reduced service latency by 75% by designing and implementing a parallel scheduler program for efficient data fetching and processing.
                        </div>
                    </div>
                    
                    <div className={toggleState === 4 ? "content active-content" : "content"}>
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
                    
                    <div className={toggleState === 3 ? "content active-content" : "content"}>
                        <div className="experience-content-title">
                            Android Software Developer
                            <span class="experience-content-company">
                                &nbsp;@&nbsp;
                                <a href="https://www.ardaimpact.com/" target="_blank" rel="noreferrer" className="experience-content-company-link">
                                    Arda Impact
                                </a>
                            </span>
                        </div>
                        <div className="experience-content-date">
                            Oct. 2021 — May 2022 
                        </div>
                        <div className="experience-content-description">
                            Designed, engineered, and delivered an Android application used by hospitals and clinics in The Gambia to request and 
                            track drone-delivered medical supplies in real-time, connected to Arda’s drone flight-control backend system.
                        </div>
                        <div className="experience-content-description">
                            App received $70k in initial funding, in partnership with The Gambian Ministry of Health and Medical Research Council UK.
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