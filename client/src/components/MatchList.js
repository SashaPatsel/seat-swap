import React from "react";

const List = ({ children }) => {
  return (
    <div>

      <ul>
        {children}
      </ul>
    </div>
  );
};

export default List;