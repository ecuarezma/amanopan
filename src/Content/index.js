import React from "react";
import classes from "./Content.module.scss";
import ReactPlayer from "react-player";

const Content = () => {
  return <div className={classes.Content}>
    {/* <ul>
      <li><a href="https://cashdrop.biz/amanopan">PREORDER ONLINE</a></li>
    </ul> */}
    <div>
    <ul>
      <li><div >
      <h1>NOW HIRING!</h1>
      <h4><a href="https://form.jotform.com/212738155151149">apply now!</a></h4>
    </div></li>
    </ul>
    </div>
    
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
