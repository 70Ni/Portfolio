import React, { useRef } from "react";
import profile from "../../Images/profile.png";
import copy from "../../Images/copy.svg";

const email = "4thedevelopments@gmail.com";
const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

function About() {
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
            src={copy}
            alt="copyemail"
            className="copytext"
            onClick={() => {
              textCopy();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
