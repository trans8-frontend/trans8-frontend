import React from "react";
import "./Footer.css";
import Icon from "../../assets/Image 1.png";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const style = { background: "#0092ff", padding: "8px 0" };

const Footers = () => {
  return (
    <>
      <div className="mainfooter">
        <div>
          <button className="footer_button">GET A QUOTE</button>
        </div>
        <div className="footer_1">
          <div className="second">
          <MailIcon className="icon2"></MailIcon>
            <p className="para2">Hello@trans8.com</p>
            <PhoneIcon className="icon2"></PhoneIcon>
            <p className="para2">444141242</p>
          </div>
        </div>
      </div>

      <div className="main2">
        <div>
          <FacebookIcon sx={{ fontSize: "1.8vw" }} style={{ color: "white" }} />
        </div>
        <div>
          <TwitterIcon sx={{ fontSize: "1.8vw" }} style={{ color: "white" }} />
        </div>
        <div>
          <InstagramIcon
            sx={{ fontSize: "1.8vw" }}
            style={{ color: "white" }}
          />
        </div>
        <div>
          <LinkedInIcon sx={{ fontSize: "1.8vw" }} style={{ color: "white" }} />
        </div>
      </div>

      <div className="maindiv">
        <div>
          <h6 style={{ color: "white" }}>
            @2021 Trans8 Logistics. All rights reserved
          </h6>
        </div>
        <div>
          <div className="link">
            <div className="link_f1">Home</div>
            <div className="link_f1">About</div>
            <div className="link_f1">Industries</div>
            <div className="link_f1">Contact</div>
            <div className="link_f1">Tracking</div>
            <div className="link_f2">Login</div>
          </div>
        </div>
      </div>

      <div className="footerBottom">
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
