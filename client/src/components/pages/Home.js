import React from "react";
import Nav from '../Nav'
import FullCal from "../Calendar";
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import Navpills from "../Navpills";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./TradeOffers";
import MyRequests from "./MyRequests";
import OrgTix from "./OrgTix";
import AllTix from "./AllTix";
import Historyy from "./Historyy";
import News from "./News";
//import addTix from "./addTix";
import addWatcher from "./addWatcher";
import addTicket from "./addTicket";
import addSubscription from "./addSubscription";
//<Route path="/addTix" component={addTix} />

const Home = props => (
  <div className="ss-wrapper">
    <Nav />
    <div className="row">
      <div className="col-md-8">
        <FullCal />
      </div>
      <div className="col-md-4">
        <Router>
          <div className="rightNav">
            <Navpills />
            <Route exact path="/requests" component={MyRequests} />
            <Route exact path="/tradeoffers" component={Offers} />
            <Route exact path="/orgtix" component={OrgTix} />
            <Route path="/alltix" component={AllTix} />
            <Route path="/history" component={Historyy} />
            <Route path="/news" component={News} />
            <Route path="/addWatcher" component={addWatcher} />
            <Route path="/addSubscription" component={addSubscription} />
            <Route path="/addTicket" component={addTicket} />
          </div>
        </Router>
      </div>
    </div>
  </div>
);

export default Home;
