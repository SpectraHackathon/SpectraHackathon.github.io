import React from "react";
import FAQEntry from "./FAQEntry"


export default function FAQs({ questions }) {

  return (
    <div className="contact">
      <h1>FAQs</h1>
      {questions}

      <FAQEntry
        questionText="What is Spectra?"
        answer='Spectra is a 2-day, 32-hour hackathon open to all individuals who identify as female or non-binary. In this case, the word "hack" describes how multiple technologies can be used together in new and creative ways. Teams will spend the day creating a website, mobile app, or hardware creation. The Spectra team believes that the most important aspect of a hackathon is the community it generates and the skills that attendees can take away with them at the end of the event.'
      />


    </div>
  );
}
