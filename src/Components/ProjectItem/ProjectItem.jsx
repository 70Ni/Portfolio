import React from "react";
import Project from "./Project";
import Skills from "./Skills";
import content from "../../api/Content.json";

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
              {content.map((item) => {
                return <Project data={item} />;
              })}
            </div>
          ) : (
            <div className="skills-wrap">
              <Skills skill="HTML" />
              <Skills skill="React" />
              <Skills skill="Node" />
              <Skills skill="Js" />
              <Skills skill="CSS" />
              <Skills skill="Tailwind" />
              <Skills skill="MongoDB" />
              <Skills skill="Typescript" />
              {/* <Skills skill="MongoDB" />
              <Skills skill="MongoDB" /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
