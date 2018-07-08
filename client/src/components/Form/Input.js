import React from "react";

const Input = props => (


<div class="form__group">
<input class="form__input"{...props} />
<label {...props} class="form__label">{props.label}</label>
</div>
);

export default Input