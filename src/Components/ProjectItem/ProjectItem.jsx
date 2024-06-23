import React from "react";
import Project from "./Project";
import Skills from "./Skills";

function ProjectItem({ header }) {
  return (
    <div className="project-Item-section">
      <div className="project-Header">{header}</div>
      <div className="project-lists-wrapper">
        <div className="description-wrapper">
          {header === "Projects" ? (
            <div>
              <Project />
              <Project />
              <Project />
            </div>
          ) : (
            <div className="skills-wrap">
              <Skills skill="ReactJs" />
              <Skills skill="Js" />
              <Skills skill="HTML" />
              <Skills skill="CSS" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
