import "../assets/Section.css";

import React from "react";

function Section({ Icon, title, selected }) {
  return (
    <div className={`section ${selected && "section--active"}`}>
      <div className={`section__body`}>
        <Icon />
        <h3>{title}</h3>
      </div>
      {selected && <div className='section__border'></div>}
    </div>
  );
}

export default Section;
