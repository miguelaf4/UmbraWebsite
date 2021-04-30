import React from 'react'
import './style.css'

import Edificio from '../../images/building/building_2.jpg'

const Section2 = () => {
    return (
        <div className="second-container">
            <div className="photo">
                <img src={Edificio} alt='Edificio1'></img>
            </div>
            <div className="text-container-alt">
                <h3>UMBRA ¿Por qué es tu mejor opcion para INVERTIR?</h3>    
                <br/>
                <ul>
                    <li>Ubicación privilegiada al norte de Mérida, Yucatán.</li>
                    <li>Zona con gran desarollo y plus valía.</li>
                    <li> Sector de alta rentabilidad impulsada por su cercanía a universidades, centros comerciales y vialidades principales (Periférico, carretera Mérida-Progreso)</li>
                </ul>
                

            </div>
            
        </div>       
    )
}

export default Section2