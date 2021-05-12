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
        <div className="footer-container">
            <div className="datos-container">
                <img src={Umbra} alt="Logo Umbra"/>
                <span>Oficina</span>
                <p>Calle Aguilas, Temozón Norte, S/N de Col 27, Mérida, Yuc.</p>
                <div className="datos-inner-container">
                    <div className="tel-container">
                        <span>TEL.</span>
                        <p>+032 3456 7890</p>
                    </div>
                    <div className="email-cotainer">
                        <span>EMAIL</span>
                        <p>info@umbramx.com</p>
                    </div>
                </div>
                <div className="socials-footer-container">
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
            <div className="menu-container">
                <span>Menú</span>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Departamentos</a></li>
                    <li><a href="">Amenidades</a></li>
                    <li><a href="">Ubicación</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
            <div className="horario-container">
                <span>Horarios de oficina</span>
                <p>Con gusto te recibimos en nuestras oficinas en los siguientes horarios:</p>
                <ul>
                    <li>Lun-Vie: 9.00 am - 6.00 pm</li>
                    <li>Sábado: 9.00 am - 6.00 pm</li>
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
