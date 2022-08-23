import React from "react";
import '../App.css';
import './Contact.css';


function Contact() {
    return (
        <div className='contact-container'>
            <div className="contact-center-container" data-aos="fade-up">
                <div className="contact-h1">
                    What's next?
                </div>
                <div className="contact-h2">
                    Let's connect!
                </div>
                <div className="contact-p">
                    I'm currently looking for openings for this winter and summer 2023. <br />
                    If you have opportunities related to software, or if you want to chat about technology, Harvard, or life in general, 
                    please feel free to reach out!
                </div>
                <div className="contact-email-button" onClick={() => window.location = 'mailto:jaredni@college.harvard.edu'}>
                    <span className="email-text">Say Hi</span>
                </div>

                <div className="contact-socials">
                    <a className="contact-social-button" href="https://github.com/milkteadj?tab=repositories" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-github contact-social-icon"></i>
                    </a>
                    <a className="contact-social-button" href="https://www.linkedin.com/in/jaredhn/" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-linkedin contact-social-icon"></i>
                    </a>
                    <a className="contact-social-button" href="https://www.instagram.com/jiawei.h.n/" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-instagram contact-social-icon"></i>
                    </a>
                </div>
                
            </div>
        </div>
    );
}

export default Contact;