import React, { useSyncExternalStore } from "react";
import "./team.css";
import avatar1 from "./../../images/avatar1.png";
import TeamCard from "./TeamCard";
import section from "./../../images/section.png";
import sectionStyle from './../../images/teamTitle.png'

const Team = () => {
  const persons = [
    {
      id: 1,
      picture: avatar1,
      name: "ruby",
      description:
        "Rudy is the Founder of AIKUJI and also a creative  brandin specialist He oversees the management and creative direction of AIKUJI as well as collaborations and partnerships in the Web2 space. He focuses on the development of merchandise and manga associated with AIKUJI",
      title: "founder",
      twitter: "www.twitter.com/person1",
      discord: "person1#6151",
    },
    {
      id: 2,
      picture: avatar1,
      name: "ruby",
      description:
        "Rudy is the Founder of AIKUJI and also a creative  brandin specialist He oversees the management and creative direction of AIKUJI as well as collaborations and partnerships in the Web2 space. He focuses on the development of merchandise and manga associated with AIKUJI",
      title: "founder",
      twitter: "www.twitter.com/person1",
      discord: "person1#6151",
    },
    {
      id: 3,
      picture: avatar1,
      name: "ruby",
      description:
        "Rudy is the Founder of AIKUJI and also a creative  brandin specialist He oversees the management and creative direction of AIKUJI as well as collaborations and partnerships in the Web2 space. He focuses on the development of merchandise and manga associated with AIKUJI",
      title: "founder",
      twitter: "www.twitter.com/person1",
      discord: "person1#6151",
    },
    {
      id: 4,
      picture: avatar1,
      name: "ruby",
      description:
        "Rudy is the Founder of AIKUJI and also a creative  brandin specialist He oversees the management and creative direction of AIKUJI as well as collaborations and partnerships in the Web2 space. He focuses on the development of merchandise and manga associated with AIKUJI",
      title: "founder",
      twitter: "www.twitter.com/person1",
      discord: "person1#6151",
    },
  ];
  return (
    <div className="team">
        <div className="team-title">
        <img className="section-image" src={sectionStyle} alt="" />
          <div className="texts">
          <h1> THE AIKUJI</h1>
          <h2>TEAM</h2>
          </div>
      </div>

      <div className="team-cards">
        {/* <div className="team-card-main"> */}
        {persons.map((person) => {
          return <TeamCard key={person.id} person={person}></TeamCard>;
        })}
        {/* </div> */}
      </div>
      <div className="team-section">
        <img src={section} alt="" />
      </div>
    </div>
  );
};

export default Team;
