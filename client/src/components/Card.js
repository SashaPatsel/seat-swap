import React from "react";

const Card = props => (
  <div className="ss-card">
    <img className="ss-card__img" src={props.img}/>
    {props.children}
  </div>
)

export default Card