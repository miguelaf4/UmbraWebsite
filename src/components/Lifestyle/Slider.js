
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import Depa from './inside-apartment.jpg'
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
        "delay": 2000
    }}
    pagination={{
      "dynamicBullets": true
    }} className="mySwiper">
  <SwiperSlide> <img src={Depa} alt="" srcset="" /></SwiperSlide>
  <SwiperSlide> <img src={Depa} alt="" srcset="" /> </SwiperSlide>
  <SwiperSlide> <img src={Depa} alt="" srcset="" /> </SwiperSlide>
  <SwiperSlide> <img src={Depa} alt="" srcset="" /> </SwiperSlide>
  </Swiper>
    </>
  )
}