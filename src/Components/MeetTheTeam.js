import React from "react";
import Samar from "./teamImgs/Samar.png";
import Ivy from "./teamImgs/Ivy.png";
import twitter from "./icons/twitterGray.png";
import linkedIn from "./icons/linkedGray.png";

export default function MeetTheTeam({ title, subtitle, id }) {

  const teamStyle = {
    color: "#114A75"
  }

  const roleColor = {
    color: "#C0C0C0"
  }

  return (

      <div className="section-content" id={id}>

          <h1>{title}</h1>

          <div className="row">
            <div className="col-lg">
              <img src={Samar} width = "180" height = "180" id={1}/>
                <h2 style={teamStyle}>Samar Barakat</h2>
                <p style={roleColor}>Director & Webmaster</p>
                <a href="https://twitter.com/sbarakitkat" target="_blank"><img src={twitter} width = "20" height = "20"/></a>
                <a href="https://www.linkedin.com/in/sbarakitkat/" target="_blank"><img src={linkedIn} width = "20" height = "20"/></a>
              </div>

            <div className="col-lg">
              <img src={Ivy} width = "180" height = "180" id={2}/>
                <h2 style={teamStyle}>Ivy Chen</h2>
                <p style={roleColor}>Co-Director & Design</p>
                <a href="https://www.instagram.com/ivavay.draw/" target="_blank"><img src={twitter} width = "20" height = "20"/></a>
            </div>
          </div>

          <div className="row">
                {subtitle}
          </div>

      </div>

  );
}
