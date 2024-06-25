import React from "react";
import "../../App.css";
import Intro from "../Intro/Intro";
import ProjectItem from "../ProjectItem/ProjectItem";
import About from "../About/About";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="App">
      <div className="Hero-wrapper">
        <About />
        <Intro />
        <ProjectItem header={"Projects"} />
        <ProjectItem header={"Knowledge"} />
      </div>
    </div>
  );
}

export default Home;
