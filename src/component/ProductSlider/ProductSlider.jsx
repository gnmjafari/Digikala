

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation,FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { MdArrowBackIosNew, MdArrowForwardIos, MdKeyboardArrowLeft } from "react-icons/md";
import './ProductSlider.css';
import ProductSliderData from "./ProductSliderData";


function ProductSlider() {

    return(
        <>
        <div className='contianerProduct' dir="rtl">
        <Swiper

        direction={"horizontal"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        navigation={true}
        spaceBetween={2}

        modules={[Navigation, FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
          <SwiperSlide>
              <a href="" className='boxmore' dir="rtl" style={{width:"100%", height:"100%", minHeight:"100%"}}>
                  <img 
                  style={{width: '92px', height: '77px'}}
                  src="https://www.digikala.com/statics/img/svg/amazing-typo.svg" alt="" />
                  <img
                  style={{width: '145px', height: '115px'}}
                  src="https://www.digikala.com/statics/img/png/specialCarousel/box.png" alt="" />
                  <button>
                      مشاهده همه
                      <MdKeyboardArrowLeft/>
                  </button>
              </a>
          </SwiperSlide>
          {ProductSliderData.map((item, index) =>{
                return(
                <SwiperSlide>
                    <a href="" className='boxproduct' dir="rtl" key={index}>
                        <img src={item.Image} alt="" />
                        <div>
                            <span 
                            style={{color:"white", background:"#e6123d", borderRadius:"40%", padding:"1px 7px"}}>
                                {item.takhfif}
                            </span>
                            <span style={{color:"black"}}>
                                {item.price} تومان
                            </span>
                        </div>
                        <p>
                            {item.oldprice}
                        </p>
                    </a>
                </SwiperSlide> 
                )
            })} 
      </Swiper>
      </div>
        </>
    )
}

export default ProductSlider