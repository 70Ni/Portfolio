import React, { useState, useContext } from "react";
import product from "../../Images/product.png";
import "../../App.css";
import arrow from "../../Images/arrow.svg";
import arrowback from "../../Images/arrowback.svg";
import arrowbackwhite from "../../Images/arrowbackwhite.svg";
import { Link, useHref } from "react-router-dom";
import ProjectNav from "../ProjectItem/ProjectNav";
import { ThemeContext } from "../../Theme/Theme";
import arrowIcon from "../../Images/Group 12.svg";

function Currencyapp() {
  const { theme } = useContext(ThemeContext);

  const [translateX, setTranslateX] = useState(0); // State to track the translation
  console.log(translateX);
  const handleScrollLeft = () => setTranslateX((prev) => prev + 284); // Adjust the value for scroll distance
  const handleScrollRight = () => {
    setTranslateX((prev) => prev - 284); // Adjust the value for scroll distance
  };
  return (
    <div className="Project-preview-wrapper">
      {/* <div className="nav-menu-wrapper">
        <img src={menu} alt="" />
      </div> */}

      <div className="project-back-section">
        <Link to="/">
          <img
            src={theme === "light-theme" ? arrowback : arrowbackwhite}
            alt=""
            className="backarrow"
          />
        </Link>
        <div className="subHeader proview-Header">Cuurency</div>
      </div>
      <div className="pro-view-para para ">{}</div>

      <img src={product} alt="" className="product-image" />
      <div className="pro-view-para para navpro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nisi
      </div>
      <div className="button-wrapper">
        <button className="button para">
          Currency App <img src={arrow} alt="" onClick={<Link>id</Link>} />
        </button>
      </div>
      <div className="project-list-header">Other works</div>
      <div className="project-wrapper">
        {/* <div className="gradientviewR" onClick={handleScrollLeft}>
          <img src={arrowIcon} alt="" />
        </div>
        <div className="gradientviewL" onClick={handleScrollRight}>
          <img src={arrowIcon} alt="" />
        </div> */}
        <div className="project-nav-wrapper">
          <div
            className={`scrolls`}
            style={{
              transform: `translateX(${translateX}px)`,
              transitionDuration: "500ms",
            }}
          >
            <ProjectNav className="project-nav " />
            <ProjectNav className="project-nav" />
            <ProjectNav className="project-nav" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currencyapp;
