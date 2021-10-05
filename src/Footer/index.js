import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.icon}>
        <a href="https://www.instagram.com/amano_pan/" target="blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className={classes.icon}>
        <a href="https://www.twitter.com/amano_baker" target="blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </nav>
  );
}

export default Footer;

