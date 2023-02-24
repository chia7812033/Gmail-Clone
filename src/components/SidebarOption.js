import React from "react";
import "../assets/SidebarOption.css";

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      <Icon className="sidebarOption__icon" />
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
