import React, { Component } from "react";
import classes from "./IceCreamBuilder.module.css";
import { Builder } from "../../components/Builder/Builder";
import { IceCream } from "../../components/IceCream/IceCream";

export default class IceCreamBuilder extends Component {
  state = {
    items: {
      vanila: 45,
      cholcolate: 30,
      lemon: 20,
      orange: 15,
    },
    scoops: [],
    totalPrice: 0,
  };
  render() {
    const { items } = this.state;
    return (
      <div className={["container", classes.container].join(" ")}>
        <IceCream items={items} />
        <Builder />
      </div>
    );
  }
}
