import React from "react";
import "./Footer.css";
import Icon from "../../assets/Image 1.png";
import Linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram-sketched.png";
import Twitter from "../../assets/twitter1.png";
import Facebook from "../../assets/facebook.png";

const Footers = () => {
  return (
    <>
      <div className="grid_item">
        <div style={{ paddingTop: "5px" }}>
          <button className="footer_button">GET A QUOTE</button>
        </div>
        <div className="footer_1">
          <div className="second">
            <img src={Icon} width="60" height="60" />
            <p className="para">info@trans8.com</p>
            <img src={Icon} width="60" height="60" />
            <p className="para2">444141242</p>
          </div>
        </div>
      </div>
      <div className="footer_icon">
        <div className="icon_f1">
          <img src={Facebook} width="25" height="25" />
        </div>
        <div className="icon_f2">
          <img src={Twitter} width="25" height="25" />
        </div>
        <div className="icon_f3">
          <img src={Instagram} width="25" height="25" backgroundColor="white" />
        </div>
        <div className="icon_f4">
          <img src={Linkedin} width="25" height="25" />
        </div>
      </div>

      <div className="hrLine"></div>
      <div className=" footer-end">
        <div>
          <h6 style={{ color: "white" }}>
            @2021 Trans8 Logistics. All rights reserved
          </h6>
        </div>

        <div className="footer_link">
          <div className="link_f1">Home</div>
          <div className="link_f1">About</div>
          <div className="link_f1">Industries</div>
          <div className="link_f1">Contact</div>
          <div className="link_f1">Tracking</div>
          <div className="link_f2">Login</div>
        </div>
      </div>

      <div className="bottomPara">
        <div className="paragraph">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
          </p>
        </div>
        <div>
          <img src={Icon} width="60" height="60" />
        </div>
      </div>
    </>
  );
};

export default Footers;
