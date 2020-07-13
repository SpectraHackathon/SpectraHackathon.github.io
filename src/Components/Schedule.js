import React from "react";

export default function Schedule(props) {

  const teamStyle = {
    color: "#F16F6F"
  }
  
  return (

    <div className="contact">
        <div className="faq-col" style={teamStyle} >
          {props.item.time}
        </div>
        <div className="faq-col">
          {props.item.name}
        </div>
      </div>

  );
}
