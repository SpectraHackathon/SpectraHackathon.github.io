import React from "react";
import FAQEntry from "./FAQEntry"

export default function FAQs({ id }) {
  return (
    <div className="contact" id={id}>
      <h1>FAQs</h1>
      <FAQEntry
        question="Hello"
      />
    </div>
  );
}
