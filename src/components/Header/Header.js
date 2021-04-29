import React from 'react'
import './style.css'
import WAIcon from '../../images/whats-icon.svg'
import FBIcon from '../../images/fb-icon.svg'
import IGIcon from '../../images/insta-icon.svg'
import YTIcon from '../../images/yt-icon.svg'
import Logo from '../../images/UmbraLogo.png'

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={Logo} alt="Umbra Logo"/>
            </div>
            <div className="nav-container">
                <a href="/" className="nav-element">
                    CONCEPTO
                </a>
                <a href="/" className="nav-element">
                    DEPARTAMENTOS
                </a>
                <a href="/" className="nav-element">
                    LIFESTYLE
                </a>
                <a href="/" className="nav-element">
                    UBICACIÓN
                </a>
                <a href="/" className="nav-element">
                    CONTACTO
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
