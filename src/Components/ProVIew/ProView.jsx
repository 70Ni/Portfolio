import React, { useContext } from "react";
import product from "../../Images/product.png";
import "../../App.css";
import arrow from "../../Images/arrow.svg";
import arrowback from "../../Images/arrowback.svg";
import arrowbackwhite from "../../Images/arrowbackwhite.svg";
import { Link } from "react-router-dom";
import ProjectNav from "../ProjectItem/ProjectNav";
import { ThemeContext } from "../../Theme/Theme";

function ProView() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="Project-preview-wrapper">
      {/* <div className="nav-menu-wrapper">
        <img src={menu} alt="" />
      </div> */}

      <div className="project-back-section">
        <Link to="/">
          <img
            src={theme === "light-theme" ?  arrowback : arrowbackwhite}
            alt=""
            className="backarrow"
          />
        </Link>
        <div className="subHeader proview-Header">Cuurency</div>
      </div>
      <div className="pro-view-para para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nisi
        minima sunt ut quos eaque repudiandae minus sit facilis enim harum
        corrupti dicta quia! Quasi repellendus recusandae possimus qui unde.
      </div>

      <img src={product} alt="" className="product-image" />
      <div className="pro-view-para para navpro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nisi
      </div>
      <div className="button-wrapper">
        <button className="button para">
          Currency App <img src={arrow} alt="" />
        </button>
      </div>
      <div className="project-nav-wrapper">
        <ProjectNav />
        <ProjectNav />
        <ProjectNav />
      </div>
    </div>
  );
}

export default ProView;
