import React from "react";


export default function WhatsTheSchedule({ title, subtitle, dark, id }) {

  const teamStyle = {
    color: "white",
    textAlign: "left",
  }

  const otherStyle = {
    color: "white",
    textAlign: "left",
    paddingLeft: "50px"
  }



  return (

      <div className="section-content" id={id}>

          <h1>{title}</h1>

        <div className="box">
          <div className="row">
            <div className="col-lg">
                <h2 style={teamStyle}>Day 1 - 8/8/2020</h2>
            </div>
            <div className="col-lg">
                <h2 style={otherStyle}>Day 2 - 8/9/2020</h2>
            </div>
          </div>
        </div>


          <div className="row-sched">
            {subtitle}
          </div>


      </div>

  );
}
