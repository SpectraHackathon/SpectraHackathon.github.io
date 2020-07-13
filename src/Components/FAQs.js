import React from "react";
import FAQEntry from "./FAQEntry"


export default function FAQs({ id, firstColQuestions, secondColQuestions }) {

  return (
    <div className="section-content" id={id}>
      <h1>FAQs</h1>

      <div className="faq-row">
        <div className="faq-col">
          {firstColQuestions}
        </div>
        <div className="faq-col">
          {secondColQuestions}
        </div>
      </div>


      <FAQEntry className="last-faq"
        questionText="What do you mean by non-competitive? Will there be no prizes?"
        answer='Non-competitive means there will be no ranking for best overall hacks (no 1st/2nd, etc. places.) Instead, we will have other fun categories for prizes such as “best mobile hack” or “most creative use of xyz API."'
      />


    </div>
  );
}
