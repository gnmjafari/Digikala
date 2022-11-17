import { DropdownData } from "./DropdownData";
import './Dropdown.css';
import { useState } from "react";
import SubMenu, { Digitalproduct } from "./SubMenu/submenu";

function Dropdown() {

    const [dropdown, setdropdown] = useState(false);
    const [showmenumobil, setmenumobil] = useState(false);
    const [ShowMenuDigitalproduct, setShowMenuDigitalproduct] = useState(false);
    
    return(
        <>
        <ul 
        className={dropdown ? "categorymenu clicked" : "categorymenu"}
        onClick={()=> setdropdown(!dropdown)}
        >
            {DropdownData.map((item, index)=>{
                if (item.Titel === 'موبایل') {
                    return(
                        <li 
                        className="categorymenutitel" key={index} onClick={()=> setdropdown(false)} 
                        onMouseEnter={() => setmenumobil(true)} onMouseLeave={() => setmenumobil(false)} 
                        >
                            {item.Titel}
                            {showmenumobil && <SubMenu/>}
                        </li>
                    )  
                }

                if (item.Titel === 'کالای دیجیتال') {
                    return(
                        <li 
                        className="categorymenutitel" key={index} onClick={()=> setdropdown(false)} 
                        onMouseEnter={() => setShowMenuDigitalproduct(true)} onMouseLeave={() => setShowMenuDigitalproduct(false)} 
                        >
                            {item.Titel}
                            {ShowMenuDigitalproduct && <Digitalproduct/>}
                        </li>
                    )  
                }

                return(
                    <li className="categorymenutitel" key={index} onClick={()=> setdropdown(false)}>
                        {item.Titel}
                    </li>
                )
            })}
        </ul>
        </>
    ) 
}

export default Dropdown