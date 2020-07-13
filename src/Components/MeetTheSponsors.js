import React from "react";


export default function MeetTheSponsors({ title, subtitle, dark, id }) {
  return (

      <div className="section-content" id={id}>

          <h1>{title}</h1>

          <div className="row">
            {subtitle}
          </div>

      </div>

  );
}
