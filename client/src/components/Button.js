import React from "react";

const Button = props => (
  <div>
  <button className={`btn ${props.genre}`}>{props.text}</button>
  </div>
);

export default Button