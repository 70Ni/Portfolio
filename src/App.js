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

// https://nimishjn.medium.com/toggle-theme-in-reactjs-4095dd35c69d

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">
        <div className="Hero-wrapper">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<ProView />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
