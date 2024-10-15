import React from "react";

function Project({ data }) {
  return (
    <div>
      <div className="project-item">
        <div className="project-list-header">{data.title}</div>
        <div className="project-paragraph">{data.para}</div>
      </div>
    </div>
  );
}

export default Project;
