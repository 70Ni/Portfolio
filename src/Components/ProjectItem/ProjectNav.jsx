import React from "react";
import image from "../../Images/product.png";
function ProjectNav({ data }) {
  return (
    <div className="nav-projects">
      <img src={data[0].img} alt="" className="navProImg" />
      <div className="para navpro">{data[0].brief} </div>
    </div>
  );
}

export default ProjectNav;
