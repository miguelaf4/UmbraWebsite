import React from 'react'
import './style.css'

import Edificio from '../../images/FAC_ESTACIONAMIENTO.jpg'

const Section2 = () => {
    return (
        <div className="second-container responsive-layout" id="concepto2">
            <div className="img-carousel w-sm-100">
                <img src={Edificio} alt='Edificio1'></img>
            </div>
            <div className="text-container-alt w-sm-100">
                <h3>UMBRA ¿Por qué es tu mejor opción para INVERTIR?</h3>    
                <br/>
                <ul>
                    <li>Ubicación privilegiada al norte de Mérida, Yucatán.</li>
                    <li>Zona con gran desarrollo y plusvalía.</li>
                    <li> Sector de alta rentabilidad impulsada por su cercanía a universidades, centros comerciales y vialidades principales (Periférico, carretera Mérida-Progreso)</li>
                </ul>
                

            </div>
            
        </div>       
    )
}

export default Section2