import React from "react";
import classes from "./Content.module.scss";
import ReactPlayer from "react-player";

const Content = () => {
  return <div className={classes.Content}>
    {/* <ul>
      <li><a href="https://cashdrop.biz/amanopan">PREORDER ONLINE</a></li>
    </ul> */}
    
    <div className={classes.Wrapper}>
      <div className={classes.Video}>
      <ReactPlayer
        width="100%"
        url="https://vimeo.com/555433247"
      />
      </div>
    </div>
    
    
    </div>;
};

export default Content;
