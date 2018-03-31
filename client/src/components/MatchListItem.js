import React from "react";

const ListItem = props => (
  <li className="list-group-item">
       
    {props.children}
    <button className="TOButton" type="button" data-toggle="collapse" data-target={"#" + props.id} >View Offers!</button>
  </li>
);

export default ListItem;