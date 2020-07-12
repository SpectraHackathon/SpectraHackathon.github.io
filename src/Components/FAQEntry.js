import React from "react";

export default function FAQEntry({ question, answer }) {

  function showAnswer() {
      alert('Hello!');
  }

  return (
    <div className="faq-entry">
      <button className="main-button faq-button" onClick={showAnswer} href="#">{question}</button>
    </div>
  );
}
