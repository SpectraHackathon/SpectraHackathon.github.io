import React from "react";


export default function WhatsTheSchedule({ title, dayOne, dayTwo, id }) {


  const otherStyle = {
    color: "white",
    textAlign: "center",
  }



  return (

      <div className="section-content" id={id}>

          <h1>{title}</h1>

        <div className="box">
          <div className="row">
            <div className="col-lg">
                <h2 style={otherStyle}>Day 1 - 8/8/2020</h2>
            </div>
            <div className="col-lg">
                <h2 style={otherStyle}>Day 2 - 8/9/2020</h2>
            </div>
          </div>
        </div>


          <div className="faq-entry">
          <div className="row">
            <div className="col-lg">
              {dayOne}
            </div>
            <div className="col-lg">
              {dayTwo}
            </div>
            </div>
          </div>


      </div>

  );
}
