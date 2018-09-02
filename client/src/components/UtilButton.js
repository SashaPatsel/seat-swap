import React from "react";

const UtilButton = props => (
  <div className="util-button">
    <a className="util-button__icon-container" href={props.destination}>
      <i className={`fas util-button__icon ${props.icon}`}></i>
      </a>
      <label className="util-button__icon-label">{props.label}</label>
    
  </div>


)

export default UtilButton;