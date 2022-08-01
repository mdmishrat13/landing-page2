import React from "react";
import "./team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDiscord, faTwitter } from '@fortawesome/fontawesome-free-brands';
import avatar1 from "./../../images/avatar1.png";
import vector3 from "./../../images/Vector3.png";
import { faDiscord,faTwitter } from "@fortawesome/free-brands-svg-icons";

const TeamCard = ({ person }) => {
  return (
    <div>
      <div className="team-card">
        <img src={vector3} alt="" />
        <div className="card-content">
          <div className="main-identity">
            <img className="avatar" src={avatar1} alt="" />
            <h2>RUDY</h2>
          </div>
          <p>
            Rudy is the Founder of AIKUJI and also a creative / branding
            specialist. He oversees the management and creative direction of
            AIKUJI, as well as collaborations and partnerships in the Web2
            space. He focuses on the development of merchandise and manga
            associated with AIKUJI.
          </p>
          <h2>Founder</h2>
          <div className="contact-icons">
            <FontAwesomeIcon className="l-icon" icon={faTwitter} />
          <FontAwesomeIcon icon={faDiscord} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
