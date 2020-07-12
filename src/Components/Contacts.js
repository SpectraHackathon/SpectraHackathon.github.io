import React from "react";

export default function Contact({ id }) {
  return (
    <div className="contact" id={id}>
      <h1>Contact us</h1>
      <h2 className="contact-headline">Want to get involved or have any q's?</h2>
      <a className="main-aref main-button contact-button" href="mailto:hello@sospectra.com" target="_blank" rel="noopener noreferrer">
        Email us</a>
    </div>
  );
}
