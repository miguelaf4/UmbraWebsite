import React from 'react'
import './style.css'
import FBIcon from '../../images/fb-icon.svg'
import IGIcon from '../../images/insta-icon.svg'
import YTIcon from '../../images/yt-icon.svg'
import Umbra from '../../images/umbra-icon.png'
import Alquimia from '../../images/alquimia.png'
import Arkm from '../../images/arkm.png'

const Footer = () => {
    return (
        <div className="footer-container responsive-layout">
            <div className="datos-container">
                <img src={Umbra} alt="Logo Umbra"/>
                <span>Oficina</span>
                <p>Calle 33 #343 por 36D y 36C, Col. San Ramón Norte, Mérida, Yuc.</p>
                <div className="datos-inner-container">
                    <div className="tel-container">
                        <span>TEL.</span>
                        <p>9994480966</p>
                    </div>
                    <div className="email-cotainer">
                        <span>EMAIL</span>
                        <p>contacto@umbramx.com</p>
                    </div>
                </div>
                <div className="socials-footer-container">
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
            {/* <div className="menu-container d-none d-md-block">
                <span>Menú</span>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="#concepto">Concepto</a></li>
                    <li><a href="#departamentos">Departamentos</a></li>
                    <li><a href="#lifestyle">Amenidades</a></li>
                    <li><a href="#location">Ubicación</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </div> */}
            <div className="horario-container d-none d-md-block">
                <span>Horarios de oficina</span>
                <p>Con gusto te recibimos en nuestras oficinas en los siguientes horarios:</p>
                <ul>
                    <li>Lun-Vie: 9.00 am - 7.00 pm</li>
                    <li>Sábado: 9.00 am - 2.00 pm</li>
                    <li>Domingo: Cerrado</li>
                </ul>
            </div>
            <div className="logos-container">
                <span>Un desarrollo de:</span>
                <img src={Alquimia} alt="Alquimia Logo"/>
                <span>En colaboración con:</span>
                <img src={Arkm} alt="Arkkam Logo"/>
            </div>
        </div>
    )
}

export default Footer
