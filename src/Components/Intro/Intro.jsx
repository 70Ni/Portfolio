import React from "react";

import "./intro.css";
function Intro() {
  return (
    <div className="intro-wrapperhero">
      <div className="intro-wrapper">
        <div className="header-term Headerfont  ">Front-end developer</div>
      </div>
      <div className="intro-section">
        <div className="line"></div>
        <div className="about-para">
          {/* <div className="para about-con">
            I’m a developer based in Stockholm, specializing in creating digital
            experiences that are intuitive, delightful and effective. I am
            passionate about solving complex problems and crafting meaningful
            solutions that make a difference in people's lives.
          </div> */}
          <div className="project-item">
            {/* <div className="project-list-header">Lead Product Designer</div> */}
            <div className="project-paragraph">
              I'm a passionate front-end developer at the beginning of my coding
              journey. Though I don't have formal work experience yet, I have
              dedicated myself to learning the core technologies and concepts
              needed to build modern, responsive, and user-friendly websites.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
