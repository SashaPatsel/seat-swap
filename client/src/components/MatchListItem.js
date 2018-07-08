import React from "react";

const ListItem = props => (
  <li className="list-group-item">
  <button className="TOButton" type="button" data-toggle="collapse" data-target={"#" + props.id} >View Offers!</button>
    {props.children}
  </li>
);

export default ListItem;