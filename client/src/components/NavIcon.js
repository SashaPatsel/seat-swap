import React, { Component } from "react";

const NavIcon = props => (
    <div className="navigation__icon-container">
      <i className={`fas navigation__icon ${props.icon}`}></i>
      <label className="navigation__icon-label">{props.label}</label>
    </div>  
)

export default NavIcon;