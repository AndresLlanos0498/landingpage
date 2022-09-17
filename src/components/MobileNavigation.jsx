import React from "react";
import NavLinks from "./NavLinks";
import {CgCloseO, CgMenuRound} from 'react-icons/cg';
import { useState } from "react";

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon= <CgMenuRound className="Hamburger"size='40px' color='white'
    onClick={()=> setOpen(!open)}/>

    const closeIcon= <CgCloseO className="Hamburger" size='40px' color='white'
    onClick={()=> setOpen(!open)}/>

    const closeMobileMenu= () => setOpen(false);
    return ( 
    <nav className="MobileNavigation">
        <div className="imgcontainer">
        <img className="mobileimg" src="https://cdn.iconscout.com/icon/free/png-512/pc-1717555-1461311.png" alt="pcicon" />
        </div>
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </nav>
     );
}
 
export default MobileNavigation;