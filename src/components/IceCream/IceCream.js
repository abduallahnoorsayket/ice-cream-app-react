import React from "react";
import classes from "./IceCream.module.css";
import { Scoop } from "./Scoop/Scoop";
export const IceCream = () => {
  return (
    <div>
      <div className={classes.icecream}>
        <p className={classes.cone}></p>
        {/* scoop comp */}
        <Scoop />
        <div className={classes.cherry}></div>
      </div>
    </div>
  );
};
export default IceCream;
