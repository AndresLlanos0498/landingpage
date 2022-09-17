import React from "react";
const NavLinks = (props) => {
    return ( 
        <ul>
        <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href="#inicio">Inicio </a>
        </li>
        <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href="#proyectos">Proyectos </a>
        </li>
        <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href="#conocimientos">Conocimientos </a>
        </li>
        <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href="#sobremi">Sobre Mi </a>
        </li>
        <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href="#contacto">Contactame </a>
        </li>
        </ul>
     );
}
 
export default NavLinks;