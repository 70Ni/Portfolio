import React from "react";

function Skills({skill}) {
    console.log(skill)
  return (
    <div>
      <div className="skill-wrapper project-paragraph">{skill}</div>
    </div>
  );
}

export default Skills;
