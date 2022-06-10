import React from "react";
import classes from "./Body.module.css";
import IceCreamBuilder from "../../containers/IceCreamBuilder/IceCreamBuilder";

export const Body = () => {
  return (
    <div class={classes.mainBody}>
      <IceCreamBuilder />
    </div>
  );
};
export default Body;
