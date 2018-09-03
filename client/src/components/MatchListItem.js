import React from "react";

const ListItem = props => (
  <li className="list-group-item">
    <div className="list__event-info">
      <h4 className="list__title">{props.event}</h4>
      <p>{props.date}</p>
    </div>
    <button className="bttn bttn--primary list__bttn" type="button" data-toggle="collapse" data-target={"#" + props.id} >View Offers!</button>
    {props.children}
  </li>
);

export default ListItem;