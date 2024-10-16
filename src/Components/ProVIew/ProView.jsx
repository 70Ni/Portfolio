import React, { useState, useContext } from "react";
import product from "../../Images/product.png";
import "../../App.css";
import arrow from "../../Images/arrow.svg";
import arrowback from "../../Images/arrowback.svg";
import arrowbackwhite from "../../Images/arrowbackwhite.svg";
import { Link, useHref } from "react-router-dom";
import ProjectNav from "../ProjectItem/ProjectNav";
import { ThemeContext } from "../../Theme/Theme";
import notionIcon from "../../Images/notion.svg";
import GitIcon from "../../Images/github.png";
import arrowIcon from "../../Images/Group 12.svg";
import content from "../../api/Content.json";
import projects from "../../api/Projects.json";
import img from "../../api/img.json";

const cont = content;
const jsonProjects = projects;
const thumbnail = img;
let mergeJson = jsonProjects.map((content) => {
  let text = cont.find((para) => para.title === content.title);
  let images = thumbnail.find((img) => img.title === content.title);
  return [
    {
      ...content,
      ...(text || {}),
      ...(images || {}),
    },
  ];
});

console.log(mergeJson);

function ProView() {
  const { theme } = useContext(ThemeContext);

  const [translateX, setTranslateX] = useState(1); // State to track the translation
  console.log(translateX);
  const handleScrollLeft = () => setTranslateX((prev) => prev + 284); // Adjust the value for scroll distance
  const handleScrollRight = () => {
    setTranslateX((prev) => prev - 284); // Adjust the value for scroll distance
  };

  function getRandomFloat(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const [Id, setId] = useState(2);
  // Example: Random float between 1 and 10
  const randomFloat = getRandomFloat(1, 4);
  console.log(randomFloat);

  const newArray = mergeJson.filter((item) => item[0].id !== randomFloat);
  console.log(mergeJson);
  let index = Id !== 0 ? Id - 1 : Id;
  return (
    <div className="Project-preview-wrapper">
      {mergeJson[index].map((work) => {
        return (
          <div className="contentused">
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
              <div className="subHeader proview-Header">{work.title}</div>
            </div>
            <div className="pro-view-para para ">{work.para}</div>
            <img src={work.img} alt="" className="product-image" />
            <div className="pro-view-para para navpro">{work.footerpara}</div>
            {/* <div className="pro-view-para para navpro">
              Source code and more details in the below Documentation
            </div> */}
            <div className="button-wrapper">
              <a href={work.link} target="_blank">
                <button className="button para">
                  {work.title} <img src={arrow} alt="" />
                </button>
              </a>
            </div>
            <div className="notionIcon-wrpr">
              <div className="notion-links para">Documentation:</div>
              <div className="icon-wrpr">
                <a href={work.notion} target="_blank">
                  <img src={notionIcon} className="notionIcon" />
                </a>
                <a href={work.github} target="_blank">
                  <img src={GitIcon} className="githubIcon" />
                </a>
              </div>
            </div>
            <div className="more-links-wrapper"></div>
            <div className="project-list-header">works</div>
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
                  {mergeJson.map((item) => {
                    return (
                      <div
                        className="cursor-pointer"
                        onClick={() => setId(item[0].id)}
                      >
                        <ProjectNav className="project-nav" data={item} />
                      </div>
                    );
                  })}
                  {/* <ProjectNav className="project-nav" /> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProView;
