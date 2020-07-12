import React from "react";

export default function Section({ title, subtitle, dark, id }) {
  return (

      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <div className={subtitle == "section3" ? "row": null}>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
