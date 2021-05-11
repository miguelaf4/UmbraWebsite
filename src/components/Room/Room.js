import React from 'react'
import './style.css'
import Car from '../../images/Iconos/car.png'
import Bed from '../../images/Iconos/bed.png'
import Meters from '../../images/Iconos/meters.png'
import Toilet from '../../images/Iconos/toilet.png'
import Map from '../../images/map.jpg'
import Figure from '../../images/level.jpg'


const Room = () => {
    return (
        <div className='map-room'>
            <div classNames='caract-room'>
                <h1>Modelo Grey</h1>
                <div className='caract-c'>
                    <h2>Características</h2>
                    <ul>
                        <li className='map-icons'><img src={Meters}></img><p>58</p></li>
                        <li className='map-icons'><img src={Bed}></img><p>1</p></li>
                        <li  className='map-icons'><img src={Toilet}></img><p>1.5</p></li>
                        <li className='map-icons'><img src={Car}></img><p>1</p></li>

                    </ul>
                </div>
                
            </div>
            <div className='schema-room'>
                <img src={Map}></img>
            </div>
            <div className='color-room'>
                <div className='botones'>
                    <div className='color-change' id='blackB'></div>
                    <div className='color-change' id='greyB'></div>
                    <div className='color-change' id='whiteB'></div>
                </div>
                <img src={Figure}></img>
            </div>
            
        </div>
    )
}
export default Room