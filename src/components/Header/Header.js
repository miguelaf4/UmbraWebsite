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
                <a href="/"><img src={Logo} alt="Umbra Logo"/></a>
            </div>
            <div className="nav-container">
                <div  className="nav-element">
                    <Link  to="concepto" spy={true} smooth={true} duration={1000} offset={-80}> CONCEPTO </Link>
                </div>
                <div  className="nav-element">
                <Link  to="/" spy={true} smooth={true} duration={1000} offset={-80}> DEPARTAMENTOS </Link>
                    
                </div>
                <div   className="nav-element">
                <Link  to="lifestyle" spy={true} smooth={true} duration={1000} offset={-80}> LIFESTYLE </Link>
                    
                </div>
                <div   className="nav-element">
                <Link to="location" spy={true} smooth={true} duration={1000} offset={-80}> UBICACIÓN </Link>
                    
                </div>
                <div href="/"  className="nav-element">
                <Link  to="contacto" spy={true} smooth={true} duration={1000} offset={-80}> CONTACTO </Link>
                    
                </div>
               
                
            </div>
            
            
            <div className="socials-container">
                <img src={WAIcon} alt="Whatsapp Icon" className="WA-icon "/>
                <p className="wa-number">9994480966</p>
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
            
            <div id="menuToggle">
                <input type="checkbox" />
                
                <span></span>
                <span></span>
                <span></span>
                
                <ul id="menu">
                    <a href="#concepto" className="nav-element">
                    <li>CONCEPTO</li> 
                    </a>
                    <a href="/" className="nav-element">
                        <li>DEPARTAMENTOS</li>
                    </a>
                    <a href="#lifestyle" className="nav-element">
                    <li>LIFESTYLE</li> 
                    </a>
                    <a href="#location" className="nav-element">
                    <li>UBICACIÓN</li> 
                    </a>
                    <a href="#contacto" className="nav-element">
                    <li>CONTACTO</li> 
                    </a>
                </ul>

                
            </div>

        </nav>
    )
}

export default Header
