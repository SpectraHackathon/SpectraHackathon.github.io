import React from "react";

export default function Schedule(props) {

  const teamStyle = {
    color: "#F16F6F",
    paddingRight: "40px",
    marginRight: "10px",
    textAlign: "left"
  }

  const roleColor = {
    color: "#114A75",
    paddingRight: "40px",
  }

  return (

    <div class="col-sched">
      <p style={teamStyle}>{props.item.time}</p>


      <p style={roleColor}>{props.item.name}</p>
    </div>

  );
}
