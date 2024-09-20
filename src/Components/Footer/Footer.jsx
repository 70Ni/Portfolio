import React from "react";
import light from "../../Images/light.svg";
import dark from "../../Images/dark.svg";

import packageInfo from "../../../package.json";


const email = "4thedevelopments@gmail.com";
const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

function Footer() {
  return (
    <div className="Footer-wrapper">
      <div className="footer-section">
        <a href={link} target="_blank" className="footertext">
          {email}
        </a>
        <div className="footertext">v {packageInfo.version}</div>
      </div>
    </div>
  );
}

export default Footer;
