import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import profile from "../../assets/profile.png"

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle" style = {{marginBottom: "1rem"}}><span style={{ borderBottom: "3px solid #0068ff" }}>About </span> me</div>
        <div className="BigCard">
          <Image
            src={profile}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Nguyen Van Dong</strong>. I am currently final year student of <b>University of Information Technologies  </b>
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
