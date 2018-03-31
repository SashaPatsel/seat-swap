import React from "react";

const OfferList = ({ children }) => {
  return (
    // Need to assign unique ids for collapse
    <div className="collapse">
      <ul>
        
        {children}
      </ul>
    </div>
  );
};

export default OfferList;