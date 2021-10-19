import React from "react";
import "./Header.css";
import { slide as Menu } from "react-burger-menu";
import Logo from "../../assets/Group937.png";
import Shipping from "../../assets/shipping-fast-solid-svgrepo-com.png";

const HamBurger = (props) => {
  return (
    <Menu right {...props} width={"12%"} height={"12%"}>
      <a id="home" className="menu-item" href="/">
        Login
      </a>
      <a id="about" className="menu-item" href="/about">
        Quote
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Registration
      </a>
    </Menu>
  );
};

const Header = () => {
  return (
    <div className="header_main">
      <div>
        <div className="phoneIcon">
          <div style={{ paddingRight: "10px" }}>
            <img src={Shipping} width="30" height="25" />
          </div>
          <div>
            <p className="number">111.222.333</p>
          </div>
        </div>
      </div>
      <div>
        <div div className="brand_logo">
          <img src={Logo} width="150" height="30" />
        </div>
      </div>
      <div>
        <HamBurger />
      </div>
    </div>
  );
};

export default Header;
