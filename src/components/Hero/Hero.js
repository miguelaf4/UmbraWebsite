import React from 'react'
import './style.css'

import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className="hero-container">
            <h1 className="hero-title">FIND YOUR <br/> TRUE PLACE.</h1>
            <div className="btn-container">
                <a href="#concepto" className="btn btn-light" >CONOCE UMBRA</a>
                <Link to="contacto" className="btn btn-dark" spy={true} smooth={true} duration={1000} offset={-80}>CONTACTANOS</Link>
            </div>
            
        </div>
    )
}

export default Hero
