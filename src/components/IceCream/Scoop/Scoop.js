import React from "react";
import classes from "./Scoop.module.css";

export const Scoop = () => {
  return <div class={[classes.scoop, classes.orange].join("")}></div>;
};
