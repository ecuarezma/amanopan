import React from "react";
import { ReactComponent as Logo } from "../assets/logo/amano_solid.svg";

import classes from "./Header.module.scss";

const Header = () => (
  <div className={classes.Logo}>
    <Logo />
  </div>
);

export default Header;
