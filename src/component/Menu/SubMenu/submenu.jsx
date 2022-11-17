import { MobileBrand, mobile, MobilePrice, InternalMemory, PhotoResolution, usage, accessories, DigitalproductData, Mobile, Camera, Cameraaccessories, ComputersAndPeripherals, Laptopaccessories, Officemachines } from "./submenuData";
import { IoIosArrowBack } from "react-icons/io";
import './submenu.css';
import { useState } from "react";

function SubMenu() {

    const [MenuMobil, setMenuMobil] = useState(false)

    return(
        <>
        <div 
        className={MenuMobil ? "submenu clickedd" : "submenu"}
        onClick={()=> setMenuMobil(!MenuMobil)}
        >
            <h4>
                همه محصولات موبایل
                <IoIosArrowBack/>
            </h4>
            {mobile.map(item =>{
                if (item.subTitel === 'برند های مختلف گوشی موبایل') {
                    return(
                        <ul
                        onClick={()=> setMenuMobil(false)}
                        >
                            <li className="subtitel">
                                {item.subTitel}
                                <IoIosArrowBack/>
                            </li>
                            {MobileBrand.map(item => {
                                return(
                                    <div> 
                                        <span>
                                            {item.dropsub} 
                                        </span>                                      
                                    </div>
                                )
                            })}
                        </ul>
                    )
                };
                if (item.subTitel === 'گوشی بر اساس قیمت') {
                    return(
                        <ul>
                            <li className="subtitel">
                                {item.subTitel}
                                <IoIosArrowBack/>
                            </li>
                            {MobilePrice.map(item => {
                                return(
                                    <div> 
                                        <span>
                                            {item.dropsub} 
                                        </span>                                      
                                    </div>
                                )
                            })}
                        </ul>
                    )
                };
                if (item.subTitel === 'گوشی براساس حافظه داخلی') {
                    return(
                        <ul>
                            <li className="subtitel">
                                {item.subTitel}
                                <IoIosArrowBack/>
                            </li>
                            {InternalMemory.map(item => {
                                return(
                                    <div> 
                                        <span>
                                            {item.dropsub} 
                                        </span>                                      
                                    </div>
                                )
                            })}
                        </ul>
                    )
                };
                if (item.subTitel === 'رزولوشن عکس') {
                    return(
                        <ul>
                            <li className="subtitel">
                                {item.subTitel}
                                <IoIosArrowBack/>
                            </li>
                            {PhotoResolution.map(item => {
                                return(
                                    <div> 
                                        <span>
                                            {item.dropsub} 
                                        </span>                                      
                                    </div>
                                )
                            })}
                        </ul>
                    )
                };
                if (item.subTitel === 'گوشی براساس کاربری') {
                    return(
                        <ul>
                            <li className="subtitel">
                                {item.subTitel}
                                <IoIosArrowBack/>
                            </li>
                            {usage.map(item => {
                                return(
                                    <div> 
                                        <span>
                                            {item.dropsub} 
                                        </span>                                      
                                    </div>
                                )
                            })}
                        </ul>
                    )
                };
            })}
        </div>
        </>
    )
};

export function Digitalproduct() {
    return(
        <>
        <div className="submenu">
            <h4>
                همه محصولات دیجیتال
                <IoIosArrowBack/>
            </h4>
            {DigitalproductData.map(item =>{
                if (item.subTitel === 'لوازم جانبی گوشی') {
                    return(
                        <ul>
                            <li className="subtitel">
                                {item.subTitel}
                                <IoIosArrowBack/>
                            </li>
                            {accessories.map(item => {
                                return(
                                    <div> 
                                        <span>
                                            {item.dropsub} 
                                        </span>                                      
                                    </div>
                                )
                            })}
                        </ul>
                    )
                };

                if (item.subTitel === 'گوشی موبایل') {
                    return(
                        <ul>
                            <li className="subtitel">
                                {item.subTitel}
                                <IoIosArrowBack/>
                            </li>
                            {Mobile.map(item => {
                                return(
                                    <div> 
                                        <span>
                                            {item.dropsub} 
                                        </span>                                      
                                    </div>
                                )
                            })}
                        </ul>
                    )
                };

                if (item.subTitel === 'دوربین') {
                    return(
                        <ul>
                            <li className="subtitel">
                                {item.subTitel}
                                <IoIosArrowBack/>
                            </li>
                            {Camera.map(item => {
                                return(
                                    <div> 
                                        <span>
                                            {item.dropsub} 
                                        </span>                                      
                                    </div>
                                )
                            })}
                        </ul>
                    )
                };

                if (item.subTitel === 'لوازم جانبی دوربین') {
                    return(
                        <ul>
                            <li className="subtitel">
                                {item.subTitel}
                                <IoIosArrowBack/>
                            </li>
                            {Cameraaccessories.map(item => {
                                return(
                                    <div> 
                                        <span>
                                            {item.dropsub} 
                                        </span>                                      
                                    </div>
                                )
                            })}
                        </ul>
                    )
                };

                if (item.subTitel === 'کامپیوتر و تجهیزات جانبی') {
                    return(
                        <ul>
                            <li className="subtitel">
                                {item.subTitel}
                                <IoIosArrowBack/>
                            </li>
                            {ComputersAndPeripherals.map(item => {
                                return(
                                    <div> 
                                        <span>
                                            {item.dropsub} 
                                        </span>                                      
                                    </div>
                                )
                            })}
                        </ul>
                    )
                };

                if (item.subTitel === 'لوازم جانبی لپ تاپ') {
                    return(
                        <ul>
                            <li className="subtitel">
                                {item.subTitel}
                                <IoIosArrowBack/>
                            </li>
                            {Laptopaccessories.map(item => {
                                return(
                                    <div> 
                                        <span>
                                            {item.dropsub} 
                                        </span>                                      
                                    </div>
                                )
                            })}
                        </ul>
                    )
                };

                if (item.subTitel === 'ماشین های اداری') {
                    return(
                        <ul>
                            <li className="subtitel">
                                {item.subTitel}
                                <IoIosArrowBack/>
                            </li>
                            {Officemachines.map(item => {
                                return(
                                    <div> 
                                        <span>
                                            {item.dropsub} 
                                        </span>                                      
                                    </div>
                                )
                            })}
                        </ul>
                    )
                };

                return(
                    <ul>
                        <li className="subtitel">
                            {item.subTitel}
                            <IoIosArrowBack/>
                        </li>
                    </ul>
                )
                        
            })}
        </div>
        </>
    )
};

export default SubMenu;
