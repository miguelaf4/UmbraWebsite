import React from 'react'
import './style.css'
import Edificio1 from '../../images/FAC_1.jpg'

const Section1 = () => {
    return (
        <div className="first-container responsive-layout" id="concepto">
            <div className="text-container w-sm-100">
                
                <p>Desarollo pensado para elevar las experiencias de sus habitantes con departementos que se ajustan a las necesidades de un concepto de vida dinámico e integral.
                <br/><br/> 
                Umbra está conformado por:
                
                <ul>
                    <li>1 torre de 6 niveles</li>
                    <li>28 departamentos</li>
                    <li>4 diferentes modelos</li> 
                </ul>
                </p>

            </div>
            <div className="img-carousel w-sm-100">
                <img src={Edificio1} alt='Edificio1'></img>
            </div>
        </div>
            
            
    )
}

export default Section1