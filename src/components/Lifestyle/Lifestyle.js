import React from 'react'
import './style.css'
import Placeholder from './inside-apartment.jpg'

const Lifestyle = () => {
    return (
        <div className="life-container">
            <div className="info-container">
                <h1>Amenidades y servicios creados para un estilo de vida moderno</h1>
                <p>Umbra cuenta con amenidades y servicios que suceden en el interior del desarrollo y que enriquecen el estilo de vida de sus habitantes.</p>
                
            </div>
            <div className="img-carousel">
                <img src={Placeholder} alt=""/>
            </div>
        </div>
    )
}

export default Lifestyle
