import React from "react";


export default function WhatsTheSchedule({ title, dayOne, dayTwo, id }) {


  const otherStyle = {
    color: "white",
    textAlign: "center",
  }

  return (

      <div className="section-content" id={id}>

          <h1>{title}</h1>

          <div className="faq-entry">
            <div className="faq-row">
              <div className="col-lg">
                <h2 className="box" style={otherStyle}>Day 1 - 8/8/2020</h2>
                {dayOne}
              </div>
              <div className="col-lg">
                <h2 className="box" style={otherStyle}>Day 2 - 8/9/2020</h2>
                {dayTwo}
              </div>
            </div>
          </div>
      </div>

  );
}
