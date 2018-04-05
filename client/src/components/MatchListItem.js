import React from "react";
import DeleteBtn from "./DeleteButton";
const ListItem = props => (
  <li className="list-group-item">
    <div className="row">
      <div className="col-md-5">
        <strong className="myAvail" >{props.Watcher}</strong>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-3">
        <button className="TOButton" type="button" data-toggle="collapse" data-target={"#" + props.id} >View Offers!</button>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2">
        <button class="delete-watcher" >
          {props.onClick}
          <DeleteBtn />
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-md-5">
        <span className="watcher-date">{props.date}</span>
      </div>
      <div className="col-md-7"></div>
    </div>
    {props.children}
  </li>
);

export default ListItem;