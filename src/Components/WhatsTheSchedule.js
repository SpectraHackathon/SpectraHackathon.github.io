import React from "react";


export default function WhatsTheSchedule({ title, subtitle, dark, id }) {
  return (

      <div className="section-content" id={id}>

          <h1>{title}</h1>

          <div className="row">
            {subtitle}
          </div>


      </div>

  );
}
