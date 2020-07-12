import React from "react";

export default function Schedule(props) {

  const teamStyle = {
    fontSize: "10px",
    color: "#F16F6F"
  }

  const roleColor = {
    color: "#114A75"
  }

  return (

    <div class="col-sched" style={teamStyle}>

        <h1>{props.item.time}</h1>
        <h1 style={roleColor}>{props.item.name}</h1>

    </div>




  );
}
