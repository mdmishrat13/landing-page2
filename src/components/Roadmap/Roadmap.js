import React from "react";
import "./roadmap.css";
import section from "./../../images/section.png";
import sectionStyle from "./../../images/teamTitle.png";
import vector4 from "./../../images/vector4.png";
import vector5 from "./../../images/vector5.png";
import roadmapLine1 from "./../../images/final1.png";
import roadmapLine2 from "./../../images/roadmapLine2.png";
import phase3 from "./../../images/phase3.png";
import phase2 from "./../../images/phase2.svg";
import phase1 from "./../../images/phase1.png";
const Roadmap = () => {
    return (
        <div className="roadmap">
      <div className="roadmap-cards">
        {/* {steps.map(step=><Roadmap key={step.id} step= {step}></Roadmap>)} */}
        <img className="section-line" src={roadmapLine1} alt="" />
        <img className="section-line2" src={roadmapLine2} alt="" />
        <div className="roadmap-card-container phase1-style">
          <div className="background-vector">
            <img className="phase" src={phase1} alt="" />
            <img className="vector" src={vector4} alt="" />
          </div>

          <div className="roadmap-card">
            <h1>AIKUJI TIME :</h1>
            <p>
              This period we look to plan and collaborate using strategic
              partnerships with distinguished personalities across many avenues
              including trusted individuals within the NFT community,
              celebrities, artists, influencers and other NFT projects.
            </p>
            <h1>AIKUJI TIME :</h1>
            <p>
              This period we look to plan and collaborate using strategic
              partnerships with{" "}
            </p>
            <h1>AIKUJI TIME :</h1>
            <p>
              This period we look to plan and collaborate using strategic
              partnerships with This period we look to plan and collaborate
              using strategic partnerships with{" "}
            </p>
          </div>
        </div>
        <div className="roadmap-title">
          <img className="section-image" src={sectionStyle} alt="" />
          <div className="texts">
            <h1>AIKUJI</h1>
            <h2>ROADMAP</h2>
          </div>
        </div>
        <div className="middle-roadmap">
          <div className="roadmap-card-container">
            <div className="background-vector">
              <img className="phase" src={phase3} alt="" />
              <img className="vector" src={vector4} alt="" />
            </div>
            <div className="roadmap-card">
              <h1>AIKUJI TIME :</h1>
              <p>
                This period we look to plan and collaborate using strategic
                partnerships with distinguished personalities across many
                avenues including trusted individuals within the NFT community,
                celebrities, artists, influencers and other NFT projects.
              </p>
              <h1>AIKUJI TIME :</h1>
              <p>
                This period we look to plan and collaborate using strategic
                partnerships with{" "}
              </p>
              <h1>AIKUJI TIME :</h1>
              <p>
                This period we look to plan and collaborate using strategic
                partnerships with This period we look to plan and collaborate
                using strategic partnerships with{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="last-roadmap">
          <div className="roadmap-card-container">
            <div className="background-vector">
              <img className="phase2" src={phase2} alt="" />
              <img className="vector" src={vector5} alt="" />
            </div>
            <div className="roadmap-card">
              <h1>AIKUJI TIME :</h1>
              <p>
                This period we look to plan and collaborate using strategic
                partnerships with distinguished personalities across many
                avenues including trusted individuals within the NFT community,
                celebrities, artists, influencers and other NFT projects.
              </p>
              <h1>AIKUJI TIME :</h1>
              <p>
                This period we look to plan and collaborate using strategic
                partnerships with{" "}
              </p>
              <h1>AIKUJI TIME :</h1>
              <p>
                This period we look to plan and collaborate using strategic
                partnerships with This period we look to plan and collaborate
                using strategic partnerships with{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="roadmap-section">
        <img src={section} alt="" />
      </div>
    </div>
    );
};

export default Roadmap;