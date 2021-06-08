import React from 'react'
import './style.css'
import Edificio from '../../images/08d.jpg'

const Form = () => {
    return (
        <div className="form-container-wrapper responsive-layout" id="contacto">
            <div className="form-container w-sm-100">
                <h1>Es momento de obtener tu lugar verdadero</h1>  
                <br/>
                <p>
                Llena el formulario para recibir más información.
                </p>
                <br/>
                <form action="https://formsubmit.co/c2bd1a406c5ededf22c82068a3d714bf" method="POST">
                    <select id='depto_form' name='Departamento de interés'>
                        <option disabled selected class='ejemplo'>¿Cuál departamento te interesa?</option>
                        <option value='grey'>Grey</option>
                        <option value='white'>White</option>
                        <option value='black'>Black</option>
                        <option value='duplex'>Duplex</option>
                    </select>
                    <input type="text" class='fullname' name='Nombre Cliente' id='nombre' placeholder='Nombre Completo'></input>
                    <div className="row-contact">
                    <input type="tel" class='whats' name='Teléfono/Whatsapp' id='phoneNumber' placeholder='Whatsapp'></input>
                    <input type='email' class='mail' name='Correo electrónico' id='email' placeholder='Email'></input>
                    </div>
                    <input type="submit" class='envio' value="ENVIAR"></input>
                </form>
            </div>
            <div className="img-carousel w-sm-100">
                <img src={Edificio} alt='Edificio'></img>
            </div>
        </div>
            
            
    )
}

export default Form