import React from "react";

const Modal = props => (
  <div className="popup" id={props.modal}>
    <div className="popup__content">


        <a href={props.exitDestination} className="popup__close">&times;</a>
        <h2 className="heading-secondary popup__heading u-mgn-btm-small">{props.h1}</h2>
        
        {props.children}

    </div>
  </div >
)

export default Modal