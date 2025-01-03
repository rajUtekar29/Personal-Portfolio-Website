import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="mail">rajutekar2903@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/__.raj.__utekar.__/profilecard/?igsh=MWEwYTl1cHlrbHlvOQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/raj.utekar.731?mibextid=ZbWKwL">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/rajUtekar29">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
