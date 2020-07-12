import React from "react";

export default function Section({ title, subtitle, dark, id }) {
  return (

      <div className="section-content" id={id}>
        <div className={"section" + (dark ? " section-dark" : "")}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
    </div>
  );
}
