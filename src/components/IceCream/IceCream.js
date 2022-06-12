import React from "react";
import Items from "../Builder/Items/Items";
import classes from "./IceCream.module.css";
import { Scoop } from "./Scoop/Scoop";
export const IceCream = ({ items }) => {
  const flavours = Object.keys(items);
  console.log("7", flavours);
  return (
    <div>
      <div className={classes.icecream}>
        <p className={classes.cone}></p>
        {/* scoop comp */}
        {flavours.map((flavour) => {
          <Scoop key={flavour} scoop={flavour} />;
        })}
        <div className={classes.cherry}></div>
      </div>
    </div>
  );
};
export default IceCream;
