import React from "react";
// import Items from "../Builder/Items/Items";
import classes from "./IceCream.module.css";
import { Scoop } from "./Scoop/Scoop";

export const IceCream = ({ scoops }) => {
  // const flavours = Object.keys(scoops);
  return (
    <div>
      <div className={classes.icecream}>
        <p className={classes.cone}></p>
        {/* scoop comp */}
        {/* {flavours.map((flavour) => (
          <Scoop key={flavour} scoop={flavour} />
        ))} */}
        {scoops.map((scoop) => (
          <Scoop key={`${scoop}${Math.random()}`} scoop={scoop} />
        ))}

        <div className={classes.cherry}></div>
      </div>
    </div>
  );
};
export default IceCream;
