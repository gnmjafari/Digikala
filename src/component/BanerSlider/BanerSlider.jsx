import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BanerSliderData from "./BanerSliderData";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

import './BanerSlider.css';

function BanerSlider() {  

    return(
        <div className="contianerBaner">
            <Swiper
             loop={true}
             navigation={true}
             pagination={true} 
             modules={[Pagination, Navigation]} 
             className="mySwiper"
             >
                    {BanerSliderData.map((item, index) =>{
                        return(
                            <SwiperSlide>
                                <div className="BoxBaner">
                                    <a href="">
                                        <img src={item.Image} alt="" />
                                    </a>
                                </div>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
        </div>
    )
}

export default BanerSlider