import React, { Component } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import ReactGA from 'react-ga';


import fb from "./icons/fbPink.png";
import insta from "./icons/instaPink.png";
import twitter from "./icons/twitterPink.png";
import linkedIn from "./icons/linkedPink.png";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  initializeReactGAIntro() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'User', action: 'Clicked About on NavBar'})
  };

  initializeReactGASchedule() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'User', action: 'Clicked Schedule on NavBar'})
  };


  initializeReactGATeam() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'User', action: 'Clicked Team on NavBar'})
  };

  initializeReactGASponsors() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'User', action: 'Clicked Sponsors on NavBar'})
  };

  initializeReactGAFAQ() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'User', action: 'Clicked FAQs on NavBar'})
  };

  initializeReactGAContact() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'User', action: 'Clicked Contact on NavBar'})
  };

  initializeReactGACFB() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'User', action: 'Clicked Facebook on NavBar'})
  };

  initializeReactGAIG() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'User', action: 'Clicked Instagram on NavBar'})
  };

  initializeReactGATwitter() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'User', action: 'Clicked Twitter on NavBar'})
  };

  initializeReactGALinkedin() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'User', action: 'Clicked LinkedIn on NavBar'})
  };


  render() {

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
                onClick={this.initializeReactGAIntro}
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
                onClick={this.initializeReactGASchedule}
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
                onClick={this.initializeReactGATeam}
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
                onClick={this.initializeReactGASponsors}
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
                onClick={this.initializeReactGAFAQ}
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
                onClick={this.initializeReactGAContact}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <a onClick={this.initializeReactGAFB} href="https://www.facebook.com/sospectra/" target="_blank" rel="noopener noreferrer">
                <img src={fb} className="logo"/>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.initializeReactGAIG} href="https://www.instagram.com/sospectra/" target="_blank" rel="noopener noreferrer">
                <img src={insta} className="logo"/>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.initializeReactGATwitter} href="https://twitter.com/sospectra" target="_blank" rel="noopener noreferrer">
                <img src={twitter} className="logo"/>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.initializeReactGALinkedin} href="https://www.linkedin.com/company/sospectra/" target="_blank" rel="noopener noreferrer">
                <img src={linkedIn} className="logo"/>
              </a>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}
