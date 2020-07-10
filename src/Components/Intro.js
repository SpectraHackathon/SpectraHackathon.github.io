import React from "react";
import introImage from "./intro-image.png"
import placeholder from "./placeholder.png"

export default function Intro({ dark, id }) {
  return (
    <div className={"introduction"}>
      <div className="intro-content-top" id={id}>
        <img className="intro-image" src={introImage} alt={"people looking up to a computer screen"}/>
        <div className="intro-text-div">
          <p className="intro-text">Spectra is all about creating a safe and inviting environment for those who identify as female or other underrepresented genders in the tech space. We focus on learning new skills and connecting with like-minded people to help these young participants advance themselves in the tech world.</p>
          <p className="intro-text">Spectra believes it's important to host events like these to help students and new grads get comfortable using skills they've learned to make their cool and creative ideas tangible.</p>
        </div>
      </div>
      <div className="intro-content-bottom">
        <h1 className="intro-content-values">Our Values</h1>
        <div className="list-values">
          <div className="value">
            <img className="value-image" src={placeholder} alt={"illustration of our values"}/>
            <h1>inclusiviy</h1>
            <p className="value-text">We aim to foster inclusivity for people of all backgrounds. We want Spectra to have an inclusive atmosphere no matter what skill level you’re at.</p>
          </div>
          <div className="value">
            <img className="value-image" src={placeholder} alt={"illustration of our values"}/>
            <h1>diversity</h1>
            <p className="value-text">We look foward to hosting an event where people from diverse backgrounds can come and join for a shared passion in technology.</p>
          </div>
          <div className="value">
            <img className="value-image" src={placeholder} alt={"illustration of our values"}/>
            <h1>collaboration</h1>
            <p className="value-text">We hope to provide an environment where collaboration is valued and people can bounce ideas off each other.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
