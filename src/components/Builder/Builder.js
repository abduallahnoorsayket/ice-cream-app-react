import React from "react";
import classes from "./Builder.module.css";
import Items from "./Items/Items";
import { TotalPrice } from "./TotalPrice/TotalPrice";
import { Modal } from "./Modal/Modal";

export const Builder = ({ items, price }) => {
  return (
    <div>
      <div className={classes.builder}>
        <h3>Build your own Ice Cream Sundae</h3>
        <Items items={items} />
        <TotalPrice price={price} />
        {/* onclick="next()" */}
        <button type="button" className={[classes.order, "rounded"].join(" ")}>
          Add to Cart
        </button>
      </div>
      <Modal>hello modalBody</Modal>
    </div>
  );
};
