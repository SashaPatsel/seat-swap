import React from "react";

const Modal = props => (
<div class="popup" id="popup">
    <div class="popup__content">
    </div>
    <div class="popup__right">
      <a href={props.exitDestination} class="popup__close">&times;</a>
      <h2 class="heading-secondary u-mgn-btm-small">{props.h1}</h2>
      <h3 class="heading-tertiary u-mgn-btm-small">{props.h2}</h3>
      <p class="popup__text">{props.text}
      </p>
      <a href="#" class="btn btn--blue">Book Now</a>
    </div>
</div >
)