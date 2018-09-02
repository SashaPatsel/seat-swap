import React from "react";
import API from "./../utils/API";
import UtilButton from "../components/UtilButton"
import FullCal from "../components/Calendar";
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'



class YourTickets extends React.Component {

  state = {

  };


  render() {

    return (
      <div>
      <div className="your-tickets__new-tix">
      <UtilButton destination="#" icon="fa-plus" label="Add tickets"/>
      </div>
      <div className="your-tickets__new-sub">
      <UtilButton destination="#" icon="fa-plus" label="Add subscriptions"/>
      </div>
        <div className="container">
          <FullCal />

        </div>
      </div>
    )
  }
}

export default YourTickets;
