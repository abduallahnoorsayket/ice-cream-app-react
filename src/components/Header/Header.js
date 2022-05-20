import React from "react";
import classes from "./Header.module.css";
import logo from "../../assest/images/logo.svg";
import Reactlogo from "../../assest/images/react.svg";

export const Header = () => {
  return (
    <header>
      <div class="container" id="header">
        <div>
          <img class={classes.logo} src={logo} alt="Logo" />
        </div>
        <div class="textRight">
          <img src={Reactlogo} alt="React" class={classes.reactLogo} />
          <strong>React</strong>
        </div>
      </div>
    </header>
  );
};
