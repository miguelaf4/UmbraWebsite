import React from 'react'
import './style.css'
import Edificio from '../../images/building/building_form.jpg'

const Form = () => {
    return (
        <div className="first-container">
            <div className="form-container">
                <h3>Es momento de obtener tu lugar verdadero</h3>  
                <br/>
                <p>
                Llena el fomrulario para recibir más información.
                </p>
                <form action="https://formsubmit.co/c2bd1a406c5ededf22c82068a3d714bf" method="POST">
                    <select id='depto_form' name='Departamento de interés'>
                        <option disabled selected>¿Cuál departamento te interesa</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                    <input type="text" name='Nombre Cliente' id='nombre' placeholder='Nombre Completo'></input>
                    <input type='email' name='Correo electrónico' id='email' placeholder='Email'></input>
                    <input type="number" name='Teléfono/Whatsapp' id='phoneNumber' placeholder='Whatsapp'></input>
                    <input type="submit"></input>
                </form>
            </div>
            <div className="photo">
                <img src={Edificio} alt='Edificio'></img>
            </div>
        </div>
            
            
    )
}

export default Form