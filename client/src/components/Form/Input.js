import React from "react";

const Input = props => (


<div className="form__group">
<input className="form__input"{...props} />
<label {...props} className="form__label">{props.label}</label>
</div>
);

export default Input