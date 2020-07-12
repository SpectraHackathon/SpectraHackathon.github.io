import React from "react";

export default function Team(props) {

  const teamStyle = {
    fontSize: "15px",
    color: "#114A75"
  }

  const roleColor = {
    color: "#C0C0C0"
  }

  return (

    <div class="col-lg" style={teamStyle}>

        <h1>{props.item.name}</h1>
        <p style={roleColor}>{props.item.role}</p>
        <p>{props.item.socials}</p>

    </div>




  );
}
