import React from "react";

const Modal = props => (
  <div class="popup" id={props.modal}>
    <div class="popup__content">

      <div class="popup__right">
        <a href={props.exitDestination} class="popup__close">&times;</a>
        <h2 class="heading-secondary popup__heading u-mgn-btm-small">{props.h1}</h2>
        
        {props.children}
      </div>
    </div>
  </div >
)

export default Modal