import React from "react";
import introImage from "./intro-image.png"

export default function Intro({ dark, id }) {
  return (
    <div className={"introduction"}>
      <div className="section-content" id={id} style={{flexDirection: "row"}}>
        <img src={introImage} alt={"people looking up to a computer screen"}/>
        <p style={{float: "right"}}>Spectra is all about creating a safe and inviting environment for those who identify as female or other underrepresented genders in the tech space. We focus on learning new skills and connecting with like-minded people to help these young participants advance themselves in the tech world.</p>
        <p>Spectra believes it's important to host events like these to help students and new grads get comfortable using skills they've learned to make their cool and creative ideas tangible.</p>
      </div>
    </div>
  );
}
