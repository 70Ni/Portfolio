import React, { useContext } from "react";
import dark from "../../Images/dark.svg";
import light from "../../Images/light.svg";
import { Link } from "react-router-dom";
import menu from "../../Images/menu.svg";
import { ThemeContext } from "../../Theme/Theme";

function Navigation() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="Navigation-wrapper">
      {/* <img src={menu} alt="" /> */}
      <a href="/" target="_self">
        <div className="navItem">Home</div>
      </a>
      <a href="/projects" target="_self">
        <div className="navItem">Projects</div>
      </a>
      {/* <Link>
        <div className="navItem">email</div>
      </Link> */}

      <img
        src={theme === "dark-theme" ? dark : light}
        onClick={() => toggleTheme()}
        alt="theme changer"
        className="theme-changer"
      />
    </div>
  );
}

export default Navigation;
