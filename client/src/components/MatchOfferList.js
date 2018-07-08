import React from "react";

const OfferList = props => {
  return (
    // Need to assign unique ids for collapse
    <div className="collapse" id={props.id}>
      <ul>
        {props.children}
      </ul>
    </div>
  );
};

export default OfferList;

