import React from "react";
import Nav from './Nav'
import FullCal from "./Calendar";
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import Navpills from "./Navpills";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pending from "./pages/PendingTrades";
import MyRequests from "./pages/MyRequests";
import OrgTix from "./pages/OrgTix";
import AllTix from "./pages/AllTix";
import Historyy from "./pages/Historyy";
import News from "./pages/News";




const Home = props => (
  <div className="ss-wrapper">
    <Nav />
    <div className="row">
      <div className="col-md-7">
        <FullCal />
      </div>
      <div className="col-md-5">
        <Router>
          <div className="rightNav">
            <Navpills />
            <Route exact path="/pendingtrades" component={Pending} />
            <Route exact path="/requests" component={MyRequests} />
            <Route exact path="/orgtix" component={OrgTix} />
            <Route path="/alltix" component={AllTix} />
            <Route path="/history" component={Historyy} />
            <Route path="/news" component={News} />
          </div>
        </Router>
      </div>
    </div>
  </div>
);

export default Home;