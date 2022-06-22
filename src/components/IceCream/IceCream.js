import React from "react";
// import Items from "../Builder/Items/Items";
import classes from "./IceCream.module.css";
import { Scoop } from "./Scoop/Scoop";

export const IceCream = () => {
  // const flavours = Object.keys(scoops);
  return (
    <div>
      <div className={classes.icecream}>
        <p className={classes.cone}></p>
        {/* scoop comp */}
        {/* {flavours.map((flavour) => (
          <Scoop key={flavour} scoop={flavour} />
        ))} */}
        <Scoop />
        <div className={classes.cherry}></div>
      </div>
    </div>
  );
};
export default IceCream;
