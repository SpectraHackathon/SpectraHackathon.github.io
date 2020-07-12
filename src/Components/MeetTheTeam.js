import React from "react";
import Samar from "./teamImgs/Samar.png";
import Ivy from "./teamImgs/Ivy.png";

export default function MeetTheTeam({ title, subtitle, dark, id }) {
  return (

      <div className="section-content" id={id}>

          <h1>{title}</h1>

          <div className="row">
            <div className="col-lg">
              <img src={Samar} width = "180" height = "180" id={1}/>
                <h1>Samar Barakat</h1>
                <p>Director Webmaster</p>
                <p>Twitter</p>
              </div>

            <div className="col-lg">
              <img src={Ivy} width = "180" height = "180" id={2}/>
                <h1>Ivy Chen</h1>
                <p>Co-Director Design</p>
                <p>Twitter</p>
            </div>
          </div>

          <div className="row">
                {subtitle}
          </div>

      </div>

  );
}
