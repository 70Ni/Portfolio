import React from "react";
import Project from "./Project";
import Skills from "./Skills";

function ProjectItem({ header }) {
  return (
    <div
      className={`project-Item-section ${
        header === "Knowledge" && "knowledge-section"
      } `}
    >
      <div className="header-section">
        <div className="project-Header">{header}</div>
      </div>
      <div
        className={`project-lists-wrapper ${
          header === "Knowledge" && "knowledge-lists"
        } `}
      >
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
              <Skills skill="MongoDB" />
              <Skills skill="MongoDB" />
              <Skills skill="MongoDB" />
              <Skills skill="MongoDB" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
