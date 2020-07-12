import React from "react";

export default function Team(props) {
  return (
      <div className="section-content">
        <h1>{props.item.name}</h1>
        <p>{props.item.role}</p>
        <p>{props.item.socials}</p>
      </div>
  );
}
