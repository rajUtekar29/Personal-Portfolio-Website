import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import DesignImg from "../../img/design image.jpg";
import CodingImg from "../../img/coding image.jpg";
import DataImg from "../../img/data analyst.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./Raj_Resume_2903.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <spane>
        I am proficient in web development, web designing, and data analysis,<br/> 
        with expertise in technologies like <span className="s-tags">HTML, CSS, JavaScript, <br/>Typescript, Python, React, Java, and C/C++.</span> Additionally, <br/>I have experience using tools like <span className="s-tags">Power BI and Tableau </span><br/>to create interactive dashboards and reports, allowing me to deliver <br/>comprehensive and user-friendly solutions. 
        
        </spane>
        <a href={Resume} download>
          <button className="button s-button">My Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={DesignImg}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={CodingImg}
            heading={"Developer"}
            detail={"Html, CSS, JavaScript, React, Python"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={DataImg}
            heading={"Data Analyst"}
            detail={"PowerBI, Excel, Tableau"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
