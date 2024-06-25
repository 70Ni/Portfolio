import React from "react";
import light from "../../Images/light.svg";
import dark from "../../Images/dark.svg";

const email = "4thedevelopments@gmail.com";
const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

function Footer() {
  return (
    <div className="Footer-wrapper">
      <div className="footer-section">
        <a href={link} target="_blank" className="footertext">
          {email}
        </a>
        <img src={dark} alt="" className="theme-changer" />
      </div>
    </div>
  );
}

export default Footer;
