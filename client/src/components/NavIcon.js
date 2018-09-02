import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavIcon = props => (
  <div className="navigation__icon-container" >
    <a href={props.destination}>
      <i className={`fas navigation__icon ${props.icon}`}></i>
      <label className="navigation__icon-label">{props.label}</label>
    </a>
  </div>
)

export default NavIcon;