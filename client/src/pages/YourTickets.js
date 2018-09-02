import React from "react";
import API from "./../utils/API";
import Calendar from "../components/Calendar"
import FullCal from "../components/Calendar";
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'



class YourTickets extends React.Component {

  state = {

  };


  render() {

    return (

      <div className="container">
        <FullCal />

      </div>

    )
  }
}

export default YourTickets;
