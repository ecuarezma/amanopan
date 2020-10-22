import React from "react";
import { ReactComponent as Logo } from "../assets/logo/amano_solid.svg";

import classes from "./Header.module.scss";

const Header = () => (
  <div className={classes.Header}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <p>
      <strong>Welcome!</strong> <br />
      This site is still under construction, but you can now visit the store!
    </p>
  </div>
);

export default Header;
