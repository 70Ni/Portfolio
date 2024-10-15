import React, { useContext, useEffect, useRef } from "react";
import profile from "../../Images/profile.png";
import copy from "../../Images/copy.svg";
import copydark from "../../Images/file.svg";
import { ThemeContext } from "../../Theme/Theme";
import Emailpop from "../PopUp/Emailpop";
import { useState } from "react";

const email = "4thedevelopments@gmail.com";
const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

function  About() {
  const [copyMessage, setcopy] = useState(false);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setcopy(false);
      }, 5000);
    };
  }, [copyMessage]);

  let { theme } = useContext(ThemeContext);
  console.log(theme, "fromcopy");
  const gmailid = useRef(null);
  const textCopy = () => {
    navigator.clipboard.writeText(gmailid.current.innerHTML);
  };
  return (
    <div className="about-wrapper-hero">
      <div className="about-wrapper">
        <img src={profile} className="profileImg" alt="" />
      </div>
      <div className="about-det-w">
        <div className="name para">Tony Emmanuel</div>
        <div className="email-container">
          <a href={link} target="_blank" ref={gmailid} className="footertext">
            {email}
          </a>
          <img
            src={theme === "light-theme" ? copydark : copy}
            alt="copyemail"
            className="copytext"
            onClick={() => {
              return textCopy(), setcopy(true);
            }}
          />
        </div>
        {copyMessage && <Emailpop isCopy={copyMessage} />}
      </div>
    </div>
  );
}

export default About;
