import React from 'react'
import './style.css'
import Mapa from '../../images/mapa-umbra.png'

import Edu from '../../images/Iconos/Education.png'
import Shop from '../../images/Iconos/Shop.png'
import Water from '../../images/Iconos/Water.png'
import Centro from '../../images/Iconos/Church.png'

const Location = () => {
    return (
        <div className="location-container responsive-layout" id="location">
            
            <div className="img-carousel w-sm-100">
                <img src={Mapa} alt="Mapa Umbra"/>
            </div>
            
            <div className="info-location-container w-sm-100">
                <h1>Ubicados dentro de un entorno único.</h1>
                <p>Umbra se encuentra en un punto privilegiado frente a la Universidad Marista y las principales
                    universidades de Mérida, conecta con vialidades importantes y los mejores puntos de interés para su habitantes.
                </p>

                <div className="distance-container">
                    <img src={Edu} alt="Education Icon"/>
                    <div className="distance">
                        <p>5 min.<span></span>Universidad del Valle de México</p>
                        <p>10 min.<span></span>Universidad Anáhuac Mayab</p>
                    </div>
                </div>

                <div className="distance-container">
                    <img src={Shop} alt="Shop Icon"/>
                    <div className="distance">
                        <p>5 min.<span></span>The Harbor</p>
                        <p>6 min.<span></span>City Center</p>
                        <p>6 min.<span></span>La Isla</p>
                    </div>
                </div>

                <div className="distance-container progreso">
                    <img src={Water} alt="Shop Icon"/>
                    <div className="distance">
                        <p>25 min.<span></span>Progreso</p>
                    </div>
                </div>

                <div className="distance-container">
                    <img src={Centro} alt="Shop Icon"/>
                    <div className="distance">
                        <p>25 min.<span></span>Centro Mérida</p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Location
