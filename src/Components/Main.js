import React from "react";

export default function Main({ title, subtitle, dark, id }) {
  return (

    <div className={main}>
      <div className="section-content" id={id}>
        
        <p>{subtitle}</p>
      </div>
    </div>

  );
}
