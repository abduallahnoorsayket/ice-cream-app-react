import React from "react";
import classes from "./IceCream.module.css";
export const IceCream = () => {
  return (
    <div>
      <div className={classes.icecream}>
        <p className="cone"></p>
        <div className="scoop chocolate"></div>
        <div className="scoop vanilla"></div>
        <div className="scoop orange"></div>
        <div className="scoop strawberry"></div>
        <div className="scoop chocolate"></div>
        <div className="scoop vanilla react" id="scoop"></div>
        <div className="scoop lemon"></div>
        <div className="cherry"></div>
      </div>
    </div>
  );
};
export default IceCream;
