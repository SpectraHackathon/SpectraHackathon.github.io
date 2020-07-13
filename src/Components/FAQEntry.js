import React, { useState } from "react";
import Collapsible from 'react-collapsible';
import down_arrow from "./Images/down-arrow.png"



export default function FAQEntry({ questionText, answer }) {


  const [value, setValue] = useState(1); // integer state

  function forceUpdate() {
    setValue(value => ++value);
  }


  const question =
  <div className="faq-button">
    <h1 className="faq-question">{questionText}</h1>
    <img className={value % 2 === 0 ? "" : "faq-rotation" } src={down_arrow} alt={"down arrow"}/>
  </div>


  return (
    <div className="contact">
      <div className="faq-entry" onClick={forceUpdate}>
        <Collapsible trigger={question}>
          <p className="faq-answer">{answer}</p>
          </Collapsible>
      </div>


    </div>
  );
}
