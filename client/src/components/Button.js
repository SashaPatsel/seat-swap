import React from "react";

const Button = props => (
  <div>
  <button class={`btn ${props.type}`}>{props.text}</button>
  </div>
);

export default Button