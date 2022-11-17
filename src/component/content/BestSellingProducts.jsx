import { BestSellingProductsData } from './BestSellingProductsData';
import { MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation,FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import './BestSellingProducts.css';


function BestSellingProducts(){

    return(
        <>
          <div className='contianerBoxBestSellingProducts' dir='rtl'>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"8px", marginBottom:"10px"}}>
                <h2 style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"8px"}}>
                    پرفروش‌ترین کالا ها
                    <AiOutlineFire/>
                </h2>
                <a href="" style={{position:"absolute", left:"20px", color:"#19bfd3"}}>
                    مشاهده همه
                </a>
            </div>
            <Swiper
               grid={{
                 rows: 3,
               }}
               spaceBetween={40}

               direction={"horizontal"}
              slidesPerView={"auto"}
              freeMode={true}
              scrollbar={true}
              mousewheel={true}
              navigation={true}
              
               modules={[Grid, Navigation, FreeMode, Scrollbar, Mousewheel]}
               className="mySwiper"
            >
                    {BestSellingProductsData.map((item, index)=>{
                        return(
                            <>
                            <SwiperSlide>
                                <img src={item.image} alt="" />
                                <span>
                                    {item.num}
                                </span>
                                <p dir='rtl'>
                                    {item.NameProduct}
                                </p>
                            </SwiperSlide>  
                            </>
                        )
                    })}
            </Swiper>
        </div>
        </>
    )
}

export default BestSellingProducts