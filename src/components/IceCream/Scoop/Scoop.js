import React from "react";
import classes from "./IceCream.module.css";

export const Scoop = () => {
  return <div class={[classes.scoop, classes.orange].join("")}></div>;
};
