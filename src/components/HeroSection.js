import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <img className="heroImage" src={process.env.PUBLIC_URL + '/images/jared_formal.jpeg'} />

        <h1>Hello World.</h1> 
        <p>My name is Jared Ni.</p>
        </div>

  )
}

export default HeroSection