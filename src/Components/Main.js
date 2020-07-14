import React, { Component } from "react";
import "../App.css";
import line from "./Images/line.png"
import topSquiggle from "../topSquiggle.png"
import bottomSquiggle from "../bottomSquiggle.png"

import ReactGA from 'react-ga';

export default class Main extends Component {

  initializeReactGAHack() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'Main', action: 'Clicked Register to Hack'})
  };

  initializeReactGAMentor() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'Main', action: 'Clicked Register to Mentor'})
  };

  initializeReactGANewsletter() {
      ReactGA.initialize('UA-77365611-1');
      ReactGA.event({category: 'Main', action: 'Clicked Sign up for Newsletter'})
  };

  render() {

    return (

        <div className="background-img">

        <div className="topSquiggle">
          <img src={topSquiggle}/>
          </div>

          <div className="main-section">

            <h1 className="main-title">spectra 4.0</h1>

            <div className="main-date">
              <img src={line} alt={"horizontal white line"}/>
              <h2 className="main-date-text">sat 8/8 - sun 8/9/2020</h2>
              <img src={line} alt={"horizontal white line"}/>
            </div>

            <div className="col-bt">
            <a className="main-aref main-button main-button-hacker" onClick={this.initializeReactGAHack} href="https://tinyurl.com/sospectra" target="_blank" rel="noopener noreferrer">
              register to hack</a>
              </div>

            <div className="col-bt">
            <a className="main-button main-button-mentor" onClick={this.initializeReactGAMentor} href="https://tinyurl.com/spectramentors" target="_blank" rel="noopener noreferrer">
              register to mentor</a>
            </div>

            <div className="col-bt">
            <a className="main-button main-button-newsletter" onClick={this.initializeReactGANewsletter} href="http://eepurl.com/djGsIH" target="_blank" rel="noopener noreferrer">
              sign up for our newsletter</a>
            </div>

          </div>

          <div className="bottomSquiggle">
            <img src={bottomSquiggle}/>
            </div>

          </div>

    )
  };
}
