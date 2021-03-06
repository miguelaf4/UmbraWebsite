import React from 'react'
import './style.css'
import Placeholder from './inside-apartment.jpg'
import Pool from '../../images/Iconos/noun_Swimming Pool_936976.png'
import Solarium from '../../images/Iconos/noun_solarium_3415208.png'
import Bar from '../../images/Iconos/noun_Bar_3357416.png'
import Grill from '../../images/Iconos/noun_Grill_894016.png'
import Security from '../../images/Iconos/noun_Surveillance_3627951.png'
import Elevator from '../../images/Iconos/noun_Elevator_814611.png'
import Parking from '../../images/Iconos/noun_Parking_2508438.png'
import Trash from '../../images/Iconos/Trash.png'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Depa from './inside-apartment.jpg'

import Slider from './Slider'

const slideImages = [
    '../../images/Iconos/Trash.png',
    '../../images/Iconos/Trash.png',
    '../../images/Iconos/Trash.png'
];

const Lifestyle = () => {
    return (
        <div className="life-container responsive-layout" id="lifestyle">
            <div className="info-container w-sm-100">
                <h1>Amenidades y servicios creados para un estilo de vida moderno</h1>
                <p>Umbra cuenta con amenidades y servicios que suceden en el interior del desarrollo y que enriquecen el estilo de vida de sus habitantes.</p>
                
                <div className="benefits">
                    <div className="left-side">
                        <h4>Amenidades:</h4>
                        <ul>
                            <li> <img src={Pool} alt="Swimming Pool"/> Piscina</li>
                            <li> <img src={Solarium} alt="Solarium"/> Solarium</li>
                            <li> <img src={Bar} alt="Bar"/> Bar</li>
                            <li> <img src={Grill} alt="Grill"/>Grill</li>
                        </ul>
                    </div>
                    <div className="right-side">
                        <h4>Servicios:</h4>
                        <ul>
                            <li> <img src={Security} alt="Security Camera"/> Seguridad</li>
                            <li> <img src={Elevator} alt="Elevator"/> Elevador</li>
                            <li> <img src={Trash} alt="Trash"/> Shut de basura en cada nivel</li>
                        </ul>
                    </div>
                </div>

            </div>
            {/* <div className="img-carousel">
                
            </div> */}
            <div className="img-carousel w-sm-100">
            {/* <Slide easing="ease">
            <div className="each-slide">
                <div>
                    <img src={Placeholder} alt=""/>

                </div>
            </div>
            <div className="each-slide">
                <div>
                    <img src={Depa  } alt=""/>

                </div>
            </div>
            <div className="each-slide">
                <div>
                    <img src={Placeholder} alt=""/>

                </div>
            </div>
            </Slide> */}
            
            <Slider />
            
            </div>
            
        </div>
    )
}

export default Lifestyle
