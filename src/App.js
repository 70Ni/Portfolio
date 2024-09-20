import logo from "./logo.svg";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import ProjectItem from "./Components/ProjectItem/ProjectItem";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import ProView from "./Components/ProVIew/ProView";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import { ThemeContext } from "./Theme/Theme";
import { useContext } from "react";

// https://nimishjn.medium.com/toggle-theme-in-reactjs-4095dd35c69d

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <div className="Hero-wrapper">
        <div className="wrp">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<ProView />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      </div>
    </div>
  );
}

export default App;
