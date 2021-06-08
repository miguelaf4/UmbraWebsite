import React from 'react'
import './style.css'
import Brochure from './brochure.png'
import QRCode from 'qrcode.react'

import PDF from './Brochure-UmbraTrueLiving.pdf'

const Scan = () => {
    return (
        <div className="scan-container">
            <h1>¡Comparte nuestro brochure!</h1>
            <div className="qr-container">
               <QRCode className="qr-code" value="https://umbramx.com/Brochure-UmbraTrueLiving.pdf" renderAs="pdf" />
            </div>
            <a href={PDF} className="btn btn-dark" download>Descargar 

            
            </a>
        </div>
    )
}

export default Scan
