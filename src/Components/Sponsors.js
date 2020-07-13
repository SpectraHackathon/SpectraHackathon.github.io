import React from "react";

export default function Sponsors(props) {

  const teamStyle = {
    fontSize: "15px",
    color: "#114A75"
  }

  const roleColor = {
    color: "#C0C0C0"
  }

  return (

    <div class="col-lg" style={teamStyle}>

        <img class={props.item.size} src={props.item.img} max-width="100%" height="auto"/>

    </div>




  );
}
