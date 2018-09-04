import React from "react";
import API from "./../utils/API";
import UtilButton from "../components/UtilButton"
import FullCal from "../components/Calendar";
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import Modal from "../components/Modal"
import AddTicket from "./AddTicket"
import AddSubscription from "./AddSubscription"

class YourTickets extends React.Component {

  state = {

  };


  render() {

    return (
      <div>
      <div className="your-tickets__new-tix">
      <UtilButton destination="#addTix" icon="fa-plus" label="Add tickets"/>
      </div>
      <div className="your-tickets__new-sub">
      <UtilButton destination="#addSubs" icon="fa-plus" label="Add subscriptions"/>
      </div>
        <div className="container">
          <FullCal />

        </div>


				<Modal modal="addTix" exitDestination="#" h1="Add Tickets">
					<AddTicket/>
				</Modal>

				<Modal modal="addSubs" exitDestination="#" h1="Add Subscriptions">
           <AddSubscription/>
				</Modal>
      </div>
    )
  }
}

export default YourTickets;
