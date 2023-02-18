import React from "react";
import classes from "./Content.module.scss";
import Vimeo from "@u-wave/react-vimeo";

const Content = () => {
  return (
    <div className={classes.Content}>
      {/* <ul>
      <li><a href="https://cashdrop.biz/amanopan">PREORDER ONLINE</a></li>
    </ul> */}

      <div className={classes.Video}>
        <Vimeo video="https://vimeo.com/555433247" autoplay />
      </div>
    </div>
  );
};

export default Content;
