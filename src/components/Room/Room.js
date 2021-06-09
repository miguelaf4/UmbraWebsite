import React, { Component, useState } from 'react'
import './style.css'
import Car from '../../images/Iconos/car.png'
import Bed from '../../images/Iconos/bed.png'
import Meters from '../../images/Iconos/meters.png'
import Toilet from '../../images/Iconos/toilet.png'

import Grey from '../../images/TIPOLOGIA-C_2000.png';
import White from '../../images/TIPOLOGIA-A_2000.png';
import Black from '../../images/TIPOLOGIA-B_2000.png';
import Duplex from '../../images/Duplex-PA.png';


export class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "1",
            name: "Modelo Grey",
            key: "1",
            m2: "50",
            bed: "1",
            bath: "1",
            car: "1",
            img: Grey
        };
        this.changeRoomGrey = this.changeRoomGrey.bind(this);
        this.changeRoomWhite = this.changeRoomWhite.bind(this);
        this.changeRoomBlack = this.changeRoomBlack.bind(this);
        this.changeRoomDuplex = this.changeRoomDuplex.bind(this);
    }

    changeRoomGrey() {
        this.setState({
            id: "1",
            name: "Modelo Grey",
            key: "1",
            m2: "50",
            bed: "1",
            bath: "1",
            car: "1",
            img: Grey
        });
    }
    
    changeRoomWhite() {
        this.setState({
            id: "2",
            name: "Modelo White",
            key: "2",
            m2: "57",
            bed: "1",
            bath: "1",
            car: "1",
            img: White
        });
    }
    
    changeRoomBlack() {
        this.setState({
            id: "2",
            name: "Modelo Black",
            key: "2",
            m2: "81",
            bed: "2",
            bath: "2",
            car: "1",
            img: Black
        });
    }
    
    changeRoomDuplex() {
        this.setState({
            id: "4",
            name: "Modelo Duplex",
            key: "4",
            m2: "73",
            bed: "1",
            bath: "1.5",
            car: "1",
            img: Duplex
        });
    }
    render() {
        return (
            <div className="room-container responsive-layout" id="depa">
             <div className="left-side-room">
                <div className="color-btns-container">
                    
                    <div className='color-change' id='blackB' onClick={this.changeRoomBlack}></div>
                    <div className='color-change' id='duplexB' onClick={this.changeRoomDuplex}></div>
                    <div className='color-change' id='greyB' onClick={this.changeRoomGrey}></div>
                    <div className='color-change' id='whiteB' onClick={this.changeRoomWhite}></div>
                    
                </div>

                <div className="right-side-room d-block d-md-none">
                    <h2>{this.state.name}</h2>
                    <img src={this.state.img} alt="Topología" />
                </div>

                <div className="info-room-container">
                    <h2>Características</h2>
                    <ul>
                        <li className='map-icons'><img src={Meters}></img>
                        <p>{this.state.m2}</p>
                        </li>
                        <li className='map-icons'><img src={Bed}></img>
                        <p>{this.state.bed}</p>
                        </li>
                        <li  className='map-icons'><img src={Toilet}></img>
                        <p>{this.state.bath}</p>
                        </li>
                        <li className='map-icons'><img src={Car}></img>
                        <p>{this.state.car}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right-side-room d-none d-md-block">
                <h2>{this.state.name}</h2>
                <img src={this.state.img} alt="Topología" />
            </div>
            
        </div>
        )
    }
}

export default Room
