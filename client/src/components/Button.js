import React from "react";

const Button = props => (
  <div>
  <button onClick={props.click} className={`bttn ${props.genre}`}>{props.text}</button>
  </div>
);

export default Button
