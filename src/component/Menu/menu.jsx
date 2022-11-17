
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineLogin, HiOutlineLocationMarker } from "react-icons/hi";
import Dropdown from "./Dropdown";
import './menu.css'
import MenuData, { category } from "./MenuData";

function Menu(){

    const [dropdown, setdropdown] = useState(false);

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
         var currentScrollPos = window.pageYOffset;
         if (prevScrollpos > currentScrollPos) {
         document.getElementById("navbar").style.top = "0";
    } else {
         document.getElementById("navbar").style.top = "-200px";
    }
  prevScrollpos = currentScrollPos;
}

    return(
        <>
            <header dir='rtl'>
                <div className='boximg'>
                    <a>
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/d320be31a756e2682a69ee395c290355c8fdbfdc_1667053900.jpg?x-oss-process=image/quality,q_95" alt="" />
                    </a>
                </div>
                <div className="contianer">
                    <div className="searchBox">
                        <img src="https://www.digikala.com/statics/img/svg/logo.svg" alt="" />
                        <AiOutlineSearch/>
                        <input type="text" placeholder="جستجو" size="80" />
                    </div>
                    <div className="singFormBox">
                        <a href="">
                            <button>
                                <HiOutlineLogin/>
                                ورود | ثبت نام
                            </button>
                        </a>
                        <a href="">
                            <AiOutlineShoppingCart/>
                        </a>
                    </div>
                </div>
                <div className="contianerMenu" id="navbar">
                    <div className="MenuBox">
                        <h4>
                            {category.map(item => {
                                return(
                                    <a href="" onMouseEnter={() => setdropdown(true)} onMouseLeave={() => setdropdown(false)} >
                                        <AiOutlineMenu/>
                                        دسته بندی کالاها
                                        {dropdown && <Dropdown/>}
                                    </a>
                                )
                            })}
                        </h4>
                        <ul className="Menuboxasli">
                            {MenuData.map((menu, index)=>{
                                return(
                                    <>
                                    <li key={index}>
                                        {menu.Titel}
                                    </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="locationBox">
                        <a href="">
                            <HiOutlineLocationMarker/>
                            لطفا شهر خود را انتخاب کنید
                        </a>
                    </div>
                </div>
            </header>
            
            
        </>
    )
}

export default Menu