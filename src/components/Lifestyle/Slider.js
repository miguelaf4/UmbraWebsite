
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import Depa from './inside-apartment.jpg'

import Roof from '../../images/23.jpg'
import Pool from '../../images/25.jpg'
import Bar from '../../images/20.jpg'
import Lounge from '../../images/06.jpg'
import Img22 from '../../images/22.jpg'
import Img21 from '../../images/21.jpg'
import Img5 from '../../images/05.jpg'
import Img35 from '../../images/35.jpg'
import "./style.css";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);


export default function Slider() {
  
  
  
  return (
    <>
    <Swiper
    autoplay = {{
        "delay": 3000
    }}
    pagination={{
      "dynamicBullets": true
    }} 
    className="mySwiper">
  <SwiperSlide> <img src={Roof} alt="" srcset="" /></SwiperSlide>
  <SwiperSlide> <img src={Pool} alt="" srcset="" /> </SwiperSlide>
  <SwiperSlide> <img src={Bar} alt="" srcset="" /> </SwiperSlide>
  <SwiperSlide> <img src={Lounge} alt="" srcset="" /> </SwiperSlide>
  <SwiperSlide> <img src={Img5} alt="" srcset="" /></SwiperSlide>
  <SwiperSlide> <img src={Img21} alt="" srcset="" /> </SwiperSlide>
  <SwiperSlide> <img src={Img22} alt="" srcset="" /> </SwiperSlide>
  <SwiperSlide> <img src={Img35} alt="" srcset="" /> </SwiperSlide>
  </Swiper>
    </>
  )
}