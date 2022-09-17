import React, { useState, Fragment } from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Fragment>
      <div className={colorChange ? 'nav navscroll' : 'nav'}>
        <Navigation />
        <MobileNavigation/>
      </div>
    
    </Fragment>
  );
};

export default NavBar;
