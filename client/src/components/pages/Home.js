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
import JsxParser from 'react-jsx-parser'
//<Route path="/addTix" component={addTix} />

class Home extends React.Component {
  state = {
    feedRender: "Offers"
  }

renderFeed = () => {
  this.setState({
    feedRender: "Offers"
  })
}

  render() {
    const {feedRender} = this.state.feedRender
    console.log(this.state.feedRender)
    return (
  <div className="ss-wrapper">
  <Nav />
  <div className="row">
    <div className="col-md-8">
      <FullCal />
    </div>
    <div className="col-md-4">
        <div className="rightNav">
          <Navpills/>
        </div>

    </div>
  </div>
</div>
        );
      }
}



export default Home;
