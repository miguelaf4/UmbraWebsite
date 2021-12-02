import React from 'react'
import './style.css'
import WAIcon from '../../images/whats-icon.svg'
import FBIcon from '../../images/fb-icon.svg'
import IGIcon from '../../images/insta-icon.svg'
import YTIcon from '../../images/yt-icon.svg'
import Logo from '../../images/UmbraLogo.png'

import { Link } from 'react-scroll';
import '../layout.css'




const Header = () => {
    return (
        <nav role="navigation" className="header-container">

            <div className="logo-container">
                <a href="https://umbramx.com"><img src={Logo} alt="Umbra Logo"/></a>
            </div>
            <div className="nav-container">
                <Link  className="nav-element" to="concepto" spy={true} smooth={true} duration={1000} offset={-80}>
                        CONCEPTO 
                </Link>
                <Link  className="nav-element" to="depa" spy={true} smooth={true} duration={1000} offset={-80}>
                        DEPARTAMENTOS 
                </Link>
                <Link  className="nav-element" to="lifestyle" spy={true} smooth={true} duration={1000} offset={-80}>
                        LIFESTYLE 
                </Link>
                <Link  className="nav-element" to="location" spy={true} smooth={true} duration={1000} offset={-80}>
                        UBICACIÓN 
                </Link>
                <Link  className="nav-element" to="contacto" spy={true} smooth={true} duration={1000} offset={-80}>
                        CONTACTO 
                </Link>
               
                
            </div>
            
            
            <div className="socials-container">
                <a href=" https://wa.me/529994480966" className="whats-container" target="_blank">
                    <img src={WAIcon} alt="Whatsapp Icon" className="WA-icon "/>
                    <p className="wa-number">9994480966</p>
                </a>
                
                <div className="social-media-container">
                    <div className="vertical-break"></div>

                    <a href="https://www.facebook.com/Umbramx/?fref=mentions" target="_blank">
                        <img src={FBIcon} alt="Facebook Icon"/>
                    </a>
                    <a href="https://www.instagram.com/umbramx_/" target="_blank">
                        <img src={IGIcon} alt="Instagram Icon"/>
                    </a>
                    <a href="#">
                        <img src={YTIcon} alt="Youtbe Icon"/>
                    </a>
                </div>

                
            </div>
            
            <div id="menuToggle">
                <input type="checkbox" />
                
                <span></span>
                <span></span>
                <span></span>
                
                <ul id="menu">
                    <Link to="concepto" spy={true} smooth={true} duration={1000} offset={-80} className="nav-element">
                    <li>CONCEPTO</li> 
                    </Link>
                    <Link to="depa" spy={true} smooth={true} duration={1000} offset={-80} className="nav-element">
                        <li>DEPARTAMENTOS</li>
                    </Link>
                    <Link to="lifestyle" spy={true} smooth={true} duration={1000} offset={-80} className="nav-element">
                    <li>LIFESTYLE</li> 
                    </Link>
                    <Link to="location" spy={true} smooth={true} duration={1000} offset={-80} className="nav-element">
                    <li>UBICACIÓN</li> 
                    </Link>
                    <Link to="contacto" spy={true} smooth={true} duration={1000} offset={-80} className="nav-element">
                    <li>CONTACTO</li> 
                    </Link>
                </ul>

                
            </div>

        </nav>
    )
}

export default Header
