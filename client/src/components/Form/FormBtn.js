import React from "react";

const FormBtn = props => (
  <button {...props} className="btn btn-success">
    {props.children}
  </button>
);

export default FormBtn