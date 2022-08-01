import React from "react";
import "./hero.css";
import heroImage from "./../../images/heroImage.png";
import section from "./../../images/section.png";

const Hero = () => {
    return (
        <div className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img src={heroImage} alt="" />
        </div>
        <div className="hero-section">
          <img src={section} alt="" />
        </div>
        <div className="hero-time">
            <h2>PUBLIC MINT END IN 12 : 05 : 47 : 12</h2>
        </div>
      </div>
    </div>
    );
};

export default Hero;