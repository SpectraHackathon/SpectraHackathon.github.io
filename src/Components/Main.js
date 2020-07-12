import React, { Component } from "react";
import "../App.css";
import line from "./line.png"

export default class Main extends Component {



  render() {
    return (

        <div className="background-img">
          <div className="main-section">
            <h1 className="main-title">spectra 4.0</h1>
            <div className="main-date">
              <img src={line} alt={"horizontal white line"}/>
              <h2 className="main-date-text">8/8-8/9/2020</h2>
              <img src={line} alt={"horizontal white line"}/>
            </div>
            <a className="main-aref main-button main-button-hacker" href="https://tinyurl.com/sospectra" target="_blank" rel="noopener noreferrer">
              register to hack</a>
            <a className="main-button main-button-mentor" href="https://tinyurl.com/spectramentors" target="_blank" rel="noopener noreferrer">
              register to mentor</a>
          </div>

        </div>





    )
};
}
