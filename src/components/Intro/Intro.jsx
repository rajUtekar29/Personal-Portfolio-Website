import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/raj.png";
import thumbup from "../../img/thumbup.png";
import react from "../../img/react.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import gmail1 from "../../img/gmail1.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      
      <div className="i-left">
        <div className="i-name">
          
          <span style={{ color: darkMode ? "white" : "" }}>Hi! Myself</span>
          <span>Raj Utekar</span>
          <span>
            <span className="hihlit">Frontend Developer</span> with a keen interest in web designing
            and development and also a <span className="hihlit">Data Analyst</span>
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        
        <div className="i-icons">
          <a href="https://github.com/rajUtekar29">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/raj-utekar-a932b72a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <img src={LinkedIn} alt="" />
          </a>
          <a href="mailto:rajutekar2903@gmail.com">
          <img src={gmail1} alt="" className="whatsapp"/>
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-1%" }}
          transition={transition}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={react} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          
          <FloatinDiv img={thumbup} text1="Data" text2="Analyst" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
