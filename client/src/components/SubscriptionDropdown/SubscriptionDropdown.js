import React from "react";

const SubscriptionDropdown = props => (
	<div>
    <optgroup label="Pick One">
      <option value=""></option>
    </optgroup>
    <optgroup label="">
      <option value={props.id}>{props.name}</option>
    </optgroup>             
	</div>
);

export default SubscriptionDropdown;