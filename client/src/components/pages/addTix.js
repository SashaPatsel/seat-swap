import React, {Component} from "react";
import Subscription from "../Subscription";
import Ticket from "../Ticket";

class addTix extends Component {
  render() {
    return (
      <div> 
        <Subscription />
        <Ticket />
      </div>
    )
  }
}

export default addTix;