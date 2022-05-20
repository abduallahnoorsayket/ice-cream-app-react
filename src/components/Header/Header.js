import React from "react";
import logo from "../../assest/images/logo.svg";
import Reactlogo from "../../assest/images/react.svg";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container" id="header">
        <div>
          <img className={classes.logo} src={logo} alt="Logo" />
        </div>
        <div className="textRight">
          <img src={Reactlogo} alt="React" className={classes.reactLogo} />
          <strong>React</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
