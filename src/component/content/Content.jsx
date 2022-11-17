import digikalajetimg from '../image/دیجیکالا جت.png';
import digikalaghestimg from '../image/دیجیکالا قسطی.png';
import digikalastyleimg from '../image/دیجیکالا استایل.png';
import digikalabissimg from '../image/دیجیکالا بیزینس.png';
import digikalacharkhimg from '../image/چرخ و بخت.png';
import digikalaplusimg from '../image/دیجی پلاس.png';
import digikalamissimg from '../image/ماموریت.png';
import image1 from '../image/fresh2.png';
import image14 from '../image/14.jpg';
import image2 from '../image/fresh.svg';
import image24 from '../image/24.jpg';
import image25 from '../image/25.jpg';
import image26 from '../image/26.jpg';
import image27 from '../image/27.jpg';
import image28 from '../image/28.jpg';
import image29 from '../image/29.jpg';
import image30 from '../image/30.jpg';
import image31 from '../image/31.jpg';
import image32 from '../image/32.jpg';
import image33 from '../image/33.jpg';
import image34 from '../image/34.png';
import image35 from '../image/35.png';
import image36 from '../image/36.png';
import image37 from '../image/37.png';
import image38 from '../image/38.png';
import image39 from '../image/39.png';
import image40 from '../image/40.png';
import image41 from '../image/41.png';
import image42 from '../image/42.png';
import image43 from '../image/43.png';
import image44 from '../image/44.png';
import image45 from '../image/45.gif';
import image46 from '../image/46.jpg';
import image47 from '../image/47.jpg';
import image48 from '../image/48.jpg';
import image49 from '../image/49.jpg';
import image50 from '../image/50.jpg';
import image51 from '../image/51.jpg';
import image52 from '../image/52.jpg';
import image53 from '../image/53.jpg';
import image54 from '../image/54.jpg';
import image55 from '../image/55.jpg';
import image56 from '../image/56.jpg';
import image57 from '../image/57.jpg';
import image58 from '../image/58.jpg';
import image59 from '../image/59.jpg';
import image60 from '../image/60.jpg';
import image80 from '../image/80.jpg';
import image81 from '../image/81.jpg';
import image84 from '../image/84.svg';
import image85 from '../image/85.jpg';
import image86 from '../image/86.jpg';
import image87 from '../image/87.jpg';
import image88 from '../image/88.jpg';
import image89 from '../image/89.jpg';
import image90 from '../image/90.jpg';
import image91 from '../image/91.jpg';
import image92 from '../image/92.jpg';
import image93 from '../image/93.jpg';
import image94 from '../image/94.jpg';
import image95 from '../image/95.jpg';
import image96 from '../image/96.png';
import image97 from '../image/97.png';
import image98 from '../image/98.jpg';
import image99 from '../image/99.svg';
import image100 from '../image/100.jpg'; 
import image101 from '../image/101.jpg'; 
import image102 from '../image/102.jpg'; 
import image122 from '../image/122.jpg'; 
import image129 from '../image/129.jpg';
import image130 from '../image/130.jpg';
import image131 from '../image/131.jpg';
import image132 from '../image/132.jpg';

import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillGift } from "react-icons/ai";
import { TbStars, TbShoppingCartDiscount } from "react-icons/tb";
import { MdArrowBackIosNew, MdArrowForwardIos, MdKeyboardArrowLeft, MdKeyboardBackspace,MdShoppingBasket } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";
import Slider from "react-slick";

import './Content.css'
import ProductSlider from '../ProductSlider/ProductSlider';
import { logoBrandData } from './logoBrandData';
import { BestSellingProductsData } from './BestSellingProductsData';
import BestSellingProducts from './BestSellingProducts';
import { OfferData } from './OfferData';

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation,FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

function Content() {

    function SampleNextArrow(props) {
        const {onClick} = props;
        return (
          <div className="NextArrowProduct" onClick={onClick}>
                <MdArrowForwardIos/>
          </div>
        );
      }

    function SamplePrevArrow(props) {
        const {onClick} = props;
        return (
            <div className="PrevArrowProduct" onClick={onClick}>
                <MdArrowBackIosNew/>
            </div>
        );
    }

      const settings = {
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };

    return(
        <>
        <div className='contianerboximg' dir='rtl'>
            
            <a href="">
               <img src={digikalajetimg} alt="" />
               <span>دیجی کالا جت</span> 
            </a>
            <a href="">
                <img src={digikalastyleimg} alt="" />
                <span>حراج استایل</span>
            </a>
            <a href="">
                <img src={digikalaghestimg} alt="" />
                <span>حراج استایل</span>
            </a>
            <a href="">
                <img src={digikalabissimg} alt="" />
                <span>حراج استایل</span>
            </a>
            <a href="">
                <img src={digikalacharkhimg} alt="" />
                <span>حراج استایل</span>
            </a>
            <a href="">
                <img src={digikalaplusimg} alt="" />
                <span>حراج استایل</span>
            </a>
            <a href="">
                <img src={digikalamissimg} alt="" />
                <span>حراج استایل</span>
            </a>
            <a href="">
                <div>
                    <FiMoreHorizontal/>
                </div>
                <span>بیشتر</span>
            </a>
        </div>

        <ProductSlider/>

        <div dir='rtl' className='boxsuper'>
            <a href="">
                <div className='supertiter'>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <span>
                        تا 45% تخفیف
                    </span>
                </div>
                <div className='superproduct'>
                    <div>
                        <img src={image24} alt="" />
                        <span>23%</span>
                    </div>
                    <div>
                        <img src={image25} alt="" />
                        <span>23%</span>
                    </div>
                    <div>
                        <img src={image26} alt="" />
                        <span>23%</span>
                    </div>
                    <div>
                        <img src={image27} alt="" />
                        <span>23%</span>
                    </div>
                    <div>
                        <img src={image28} alt="" />
                        <span>23%</span>
                    </div>
                    <div>
                        <img src={image29} alt="" />
                        <span>23%</span>
                    </div>
                    <span>
                        بیش از 90 کالا
                        <MdKeyboardBackspace/>
                    </span>
                </div>
            </a>
        </div>

        <div className='boxflex'>
            <div>
                <a href="">
                    <img src={image30} alt="" />
                </a>
            </div>
            <div>
                <a href="">
                    <img src={image31} alt="" />
                </a>
            </div>
            <div>
                <a href="">
                    <img src={image32} alt="" />
                </a>
            </div>
            <div>
                <a href="">
                    <img src={image33} alt="" />
                </a>
            </div>
        </div>

        <div style={{marginTop:"60px"}}>
            <h2 style={{textAlign:"center"}}>دسته بندی های دیجی کالا</h2>
            <div className='categoryDigikala'>
                <a href="">
                    <img src={image34} alt="" />
                    <span>کالای دیجیتال</span>
                </a>
                <a href="">
                    <img src={image35} alt="" />
                    <span>موبایل</span>
                </a>
                <a href="">
                    <img src={image36} alt="" />
                    <span>خودرو، ابزار و تجهیزات صنعتی</span>
                </a>
                <a href="">
                    <img src={image37} alt="" />
                    <span>مد و پوشاک</span>
                </a>
                <a href="">
                    <img src={image38} alt="" />
                    <span>کالای سوپرمارکتی</span>
                </a>
                <a href="">
                    <img src={image39} alt="" />
                    <span>اسباب بازی، کودک و نوزاد</span>
                </a>
                <a href="">
                    <img src={image40} alt="" />
                    <span>محصولات بومی و محلی</span>
                </a>
                <a href="">
                    <img src={image41} alt="" />
                    <span>زیبایی و سلامت</span>
                </a>
                <a href="">
                    <img src={image42} alt="" />
                    <span>خانه و آشپزخانه</span>
                </a>
                <a href="">
                    <img src={image43} alt="" />
                    <span>کتاب، لوازم تحریر و هنر</span>
                </a>
                <a href="">
                    <img src={image44} alt="" />
                    <span>ورزش و سفر</span>
                </a>
            </div>
        </div>

        <div style={{display:"flex", justifyContent:"center", marginTop:"10px",width:"100%", textAlign:"center", padding:"50px"}}>
            <a href="">
                 <img style={{width:"95%", borderRadius:"20px"}} src={image45} alt="" />
            </a>
            <a href="">
                <img style={{width:"95%", borderRadius:"20px"}} src={image46} alt="" />
            </a>
        </div>

        <div>
            <h2 style={{textAlign:"center"}}>پیشنهاد دیجی کالا</h2>
            <div className='BoxNounProduct'>
                <a href="">
                    <div>
                        <img src={image47} alt="" />
                        <span>ساعت هوشمند</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image48} alt="" />
                        <span>اسپیکر (بلندگو)</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image49} alt="" />
                        <span>موتور سیکلت</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image60} alt="" />
                        <span>گوشی موبایل</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image50} alt="" />
                        <span>تبلت</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image51} alt="" />
                        <span>جوراب مردانه</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image52} alt="" />
                        <span>دستگاه بخور</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image53} alt="" />
                        <span>هدفون و هدست</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image54} alt="" />
                        <span>لپ تاب و الترابوک</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image55} alt="" />
                        <span>کیف و کاور گوشی</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image56} alt="" />
                        <span>کنسول خانگی</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image57} alt="" />
                        <span>نمایشگر (مانیتور)</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image58} alt="" />
                        <span>هودی مردانه</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={image59} alt="" />
                        <span>کیبرد (صفحه کلید)</span>
                    </div>
                </a>
            </div>
        </div>

        <div className='contianerLogoBrand'>
            <h2 style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"8px", marginBottom:"20px"}}>
                محبوب‌ترین برندها    
                <TbStars style={{color:"gold", fontSize:"25px"}}/>
            </h2>
            <Swiper
                direction={"horizontal"}
                loop={true}
                slidesPerView={"auto"}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                navigation={true}
                spaceBetween={2}
        
                modules={[Navigation, FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper">

                    {logoBrandData.map((item, index) =>{
                    return(
                        <SwiperSlide>
                            <a href="" key={index}>
                                <img src={item.image} alt="" />
                            </a> 
                        </SwiperSlide>                 
                    )
                    })}
            </Swiper>
        </div>

        <div style={{display:"flex", justifyContent:"center", marginTop:"10px",width:"100%", textAlign:"center", padding:"20px 90px"}}>
            <a href="">
                 <img style={{width:"95%", borderRadius:"20px"}} src={image80} alt="" />
            </a>
            <a href="">
                <img style={{width:"95%", borderRadius:"20px"}} src={image81} alt="" />
            </a>
        </div>
        
        <div className='contianerYourvisits'>
            <div className='BoxYourvisits'>
                <h3>گوشی موبایل</h3>
                <span>
                    براساس بازدید های شما
                </span>
                <div className='BoxYourvisitsimg'>
                    <img src={image14} alt="" />
                    <img src={image14} alt="" />
                    <img src={image14} alt="" />
                    <img src={image14} alt="" />
                </div>
                <button>
                    <MdKeyboardArrowLeft/>
                    مشاهده 
                </button>
            </div>
            <div className='BoxYourvisits'>
                <h3>کیف و کاور گوشی</h3>
                <span>
                    براساس بازدید های شما
                </span>
                <div className='BoxYourvisitsimg'>
                    <img src={image55} alt="" />
                    <img src={image55} alt="" />
                    <img src={image55} alt="" />
                    <img src={image55} alt="" />
                </div>
                <button>
                    <MdKeyboardArrowLeft/>
                    مشاهده 
                </button>
            </div>
            <div className='BoxYourvisits'>
                <h3>هدفون، هدست و هندزفری</h3>
                <span>
                    براساس بازدید های شما
                </span>
                <div className='BoxYourvisitsimg'>
                    <img src={image53} alt="" />
                    <img src={image53} alt="" />
                    <img src={image53} alt="" />
                    <img src={image53} alt="" />
                </div>
                <button>
                    <MdKeyboardArrowLeft/>
                    مشاهده 
                </button>
            </div>
            <div className='BoxYourvisits'>
                <h3>ساعت هوشمند</h3>
                <span>
                    براساس بازدید های شما
                </span>
                <div className='BoxYourvisitsimg'>
                    <img src={image47} alt="" />
                    <img src={image47} alt="" />
                    <img src={image47} alt="" />
                    <img src={image47} alt="" />
                </div>
                <button>
                    <MdKeyboardArrowLeft/>
                    مشاهده 
                </button>
            </div>
        </div>

        <div className='contianerDigiPlus' dir='rtl'>
            <div className='BoxDigiPlus'>
                <img src={image84} alt="" />
                <p>
                    خدمات ویژه برای اعضای دیجی‌پلاس  
                </p>
                <a href="">
                    عضویت
                    <MdKeyboardBackspace/>
                </a>
            </div>
            <div className='BoxDigiPlusProduct'>
                <div className='BoxDigiPlusProductTiter'>
                    <span>
                        <MdShoppingBasket/>
                        هدیه نقدی
                    </span>
                    <a href="">
                        مشاهده همه
                        <MdArrowBackIosNew/>
                    </a>
                </div>
                <div className='BoxDigiPlusProductimg'>
                    <div>
                        <img src={image85} alt="" />
                        <span>2,790 تومان هدیه</span>
                    </div>
                    <div>
                        <img src={image86} alt="" />
                        <span>2,790 تومان هدیه</span>
                    </div>
                    <div>
                        <img src={image87} alt="" />
                        <span>2,790 تومان هدیه</span>
                    </div>
                    <div>
                        <img src={image88} alt="" />
                        <span>2,790 تومان هدیه</span>
                    </div>
                    <div>
                        <img src={image89} alt="" />
                        <span>2,790 تومان هدیه</span>
                    </div>
                    <div>
                        <img src={image90} alt="" />
                        <span>2,790 تومان هدیه</span>
                    </div>
                </div>
            </div>
            <div className='BoxDigiPlusProduct'>
                <div className='BoxDigiPlusProductTiter'>
                    <span>
                        <RiMailSendFill/>
                        ارسال فوری 
                    </span>
                    <a href="">
                        مشاهده همه
                        <MdArrowBackIosNew/>
                    </a>
                </div>
                <div className='BoxDigiPlusProductimg'>
                    <div>
                        <img src={image90} alt="" /> 
                    </div>
                    <div>
                        <img src={image91} alt="" /> 
                    </div>
                    <div>
                        <img src={image92} alt="" /> 
                    </div>
                    <div>
                        <img src={image93} alt="" /> 
                    </div>
                    <div>
                        <img src={image94} alt="" /> 
                    </div>
                    <div>
                        <img src={image95} alt="" /> 
                    </div>
                </div>
            </div>
        </div>

        <div className='contianerDigiClub' dir='rtl'>
            <div style={{marginTop:"10px"}}>
                <img src={image99} alt="" />
            </div>
            <div className='BoxDigiClub'>
                <div>
                    
                        <span>
                            <AiFillGift/>
                            جایزه ها
                        </span> 
                        <img src={image96} alt="" />
                    
                </div>
                <div>
                    
                        <span>
                            <AiFillGift/>
                            ماموریت ها
                        </span>
                        <img src={image97} alt="" />
                    
                </div>
                <div>
                    
                        <span>
                            <AiFillGift/>
                            چرخ و بخت
                        </span>
                        <img src={image98} alt="" />
                    
                </div>
            </div>
        </div>

        <div className='contianerYourvisits'>
            <div className='BoxYourvisits'>
                <h3>آشنایی با فنون</h3>
                <span>
                    براساس بازدید های شما
                </span>
                <div className='BoxYourvisitsimg'>
                    <img src={image102} alt="" />
                    <img src={image102} alt="" />
                    <img src={image102} alt="" />
                    <img src={image102} alt="" />
                </div>
                <button>
                    <MdKeyboardArrowLeft/>
                    مشاهده 
                </button>
            </div>
            <div className='BoxYourvisits'>
                <h3>کفش ورزشی مردانه</h3>
                <span>
                    براساس بازدید های شما
                </span>
                <div className='BoxYourvisitsimg'>
                    <img src={image101} alt="" />
                    <img src={image101} alt="" />
                    <img src={image101} alt="" />
                    <img src={image101} alt="" />
                </div>
                <button>
                    <MdKeyboardArrowLeft/>
                    مشاهده 
                </button>
            </div>
            <div className='BoxYourvisits'>
                <h3>لپ تاپ و الترابوک</h3>
                <span>
                    براساس بازدید های شما
                </span>
                <div className='BoxYourvisitsimg'>
                    <img src={image54} alt="" />
                    <img src={image54} alt="" />
                    <img src={image54} alt="" />
                    <img src={image54} alt="" />
                </div>
                <button>
                    <MdKeyboardArrowLeft/>
                    مشاهده 
                </button>
            </div>
            <div className='BoxYourvisits'>
                <h3>ماشین</h3>
                <span>
                    براساس بازدید های شما
                </span>
                <div className='BoxYourvisitsimg'>
                    <img src={image100} alt="" />
                    <img src={image100} alt="" />
                    <img src={image100} alt="" />
                    <img src={image100} alt="" />
                </div>
                <button>
                    <MdKeyboardArrowLeft/>
                    مشاهده 
                </button>
            </div>
        </div>

        <BestSellingProducts/>

        <div style={{width:"85%", borderRadius:"15px", margin:"30px auto"}}>
            <a href="" style={{width:"100%"}}>
                <img src={image122} alt="" style={{width:"100%", borderRadius:"15px"}} />
            </a>
        </div>

        <div className='OfferProduct'>
                <h2 style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    منتخب محصولات تخفیف و حراج  
                    <TbShoppingCartDiscount style={{color:"#ef4056"}}/>
                </h2>
                <div className='BoxOfferProduct' dir="rtl">
                {OfferData.map((item, index) =>{
                    return(
                            <a href="">
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
                    )
                })}
                </div>
                <a href="" style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px", color:"#19bfd3"}}>
                    <MdArrowBackIosNew/>
                    مشاهده بیشتر
                </a>
        </div>

        <div className='BoxReading' dir='rtl'>
            <a href="">
                <img src={image129} alt="" />
                <p>
                    هنگ درام نیتراید یا استیل؟  
                </p>
            </a>
            <a href="">
                <img src={image130} alt="" />
                <p>
                    بررسی ظرف غذای برقی درما مدل DG15؛ طراحی خلاقانه و کاربردی
                </p>
            </a>
            <a href="">
                <img src={image131} alt="" />
                <p>
                    ناسا سپر حرارتی بادی خود را در مدار آزمایش کرد   
                </p>
            </a>
            <a href="">
                <img src={image132} alt="" />
                <p>
                    تاگ کارخانه خودروسازی خود را در ترکیه افتتاح کرد    
                </p>
            </a>
        </div>
        </>
    )
}

export default Content