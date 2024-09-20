import React from "react";

import "./intro.css";
function Intro() {
  return (
    <div className="intro-wrapperhero">
      <div className="intro-wrapper">
        <div className="header-term Headerfont  ">Front-end web developer</div>
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
              Lorem maximus dictumst elementum efficitur lobortis per egestas
              dis tincidunt nam non netus venenatis amet dolor dapibus donec
              justo augue.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
