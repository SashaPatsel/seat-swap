import React from "react";

const Modal = props => (
  <div className="popup" id={props.modal}>
    <div className="popup__content">

      <div className="popup__right">
        <a href={props.exitDestination} className="popup__close">&times;</a>
        <h2 className="heading-secondary popup__heading u-mgn-btm-small">{props.h1}</h2>
        
        {props.children}
      </div>
    </div>
  </div >
)

export default Modal