import React, { Component } from "react";

import { Link, animateScroll as scroll } from "react-scroll";


import fb from "./icons/fbPink.png";
import insta from "./icons/instaPink.png";
import twitter from "./icons/twitterPink.png";
import linkedIn from "./icons/linkedPink.png";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {

    const logoStyle = {
      marginLeft: "60px"
    }

    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">

          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Sponsors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item" style={logoStyle}>
              <a href="https://www.facebook.com/sospectra/" target="_blank" rel="noopener noreferrer">
                <img src={fb} className="logo"/>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.instagram.com/sospectra/" target="_blank" rel="noopener noreferrer">
                <img src={insta} className="logo"/>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://twitter.com/sospectra" target="_blank" rel="noopener noreferrer">
                <img src={twitter} className="logo"/>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/company/sospectra/" target="_blank" rel="noopener noreferrer">
                <img src={linkedIn} className="logo"/>
              </a>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}
