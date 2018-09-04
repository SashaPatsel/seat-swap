import React from "react";
import Nav from '../components/Nav'
import FullCal from "../components/Calendar";
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import Navpills from "../components/Navpills";
import YourTickets from "./YourTickets"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="ss-wrapper">
        <Nav />
          {/* <YourTickets/> */}
        <Router>
          <Switch>
            <Route path="/yo" component={YourTickets}/>
          </Switch>
        </Router> 
       {/* <div className="row">
          <div className="col-md-7">
            <FullCal />
          </div>
          <div className="col-md-5">
            <div className="rightNav">
              <Navpills />
            </div>
        </div>
        
      </div> */}
      </div>
    );
  }
}



export default Home;