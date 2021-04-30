import React from 'react'
import './style.css'
import WAIcon from '../../images/whats-icon.svg'
import FBIcon from '../../images/fb-icon.svg'
import IGIcon from '../../images/insta-icon.svg'
import YTIcon from '../../images/yt-icon.svg'
import Logo from '../../images/UmbraLogo.png'
import { ScrollingProvider, Section } from "react-scroll-section"
import { Link } from 'react-scroll';
const Header = () => {
   

    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={Logo} alt="Umbra Logo"/>
            </div>
            <div className="nav-container">
                <a  className="nav-element">
                    <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}> CONCEPTO </Link>
                </a>
                <a  className="nav-element">
                <Link activeClass="active" to="departementos" spy={true} smooth={true} duration={1000}> DEPARTAMENTOS </Link>
                    
                </a>
                <a   className="nav-element">
                <Link activeClass="active" to="lifestyle" spy={true} smooth={true} duration={1000}> LIFESTYLE </Link>
                    
                </a>
                <a   className="nav-element">
                <Link activeClass="active" to="ubicacion" spy={true} smooth={true} duration={1000}> UBICACIÓN </Link>
                    
                </a>
                <a href="/"  className="nav-element">
                <Link activeClass="active" to="contacto" spy={true} smooth={true} duration={1000}> CONTACTO </Link>
                    
                </a>
               
                
            </div>
            <div className="socials-container">
                <img src={WAIcon} alt="Whatsapp Icon" className="WA-icon"/>
                <p>999.412.2963</p>
                <div class="vertical-break"></div>

                <a href="#">
                    <img src={FBIcon} alt="Facebook Icon"/>
                </a>
                <a href="#">
                    <img src={IGIcon} alt="Instagram Icon"/>
                </a>
                <a href="#">
                    <img src={YTIcon} alt="Youtbe Icon"/>
                </a>
            </div>
        </div>
    )
}

export default Header
