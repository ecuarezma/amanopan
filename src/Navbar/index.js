import React, { useEffect, useState } from "react";
import { ReactComponent as LogoText } from "../assets/logo/amano_text.svg";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = (e) => {
      const el = document.querySelector("nav");
      if (e.target.documentElement.scrollTop > el.offsetHeight) {
        // check scrollTop element to see if there's one that works on mobile or iOS
        setScrolled(true);
      } else setScrolled(false);
      // console.log(e.target.documentElement.scrollTop);
    };
    //add event listeners
    document.addEventListener("scroll", scroll);
    //clean up function, remove event listener
    return () => {
      document.removeEventListener("scroll", scroll);
    };
  });

  return (
    <nav className={`${classes.Navbar} ${isScrolled && classes.scrolled}`}>
      <div className={classes.logoText}>
        <LogoText />
      </div>
      <div className={classes.nav}>
        <ul>
          <li>About</li>
          <li>Store</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
