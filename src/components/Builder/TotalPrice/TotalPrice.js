import React from "react";
import classes from "./TotalPrice.module.css";

export const TotalPrice = ({ price = 0 }) => {
  return (
    <div className={classes.total}>
      <div>Total Price</div>
      <div>{price.toFixed(2)} TK</div>
    </div>
  );
};
