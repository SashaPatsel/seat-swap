import React from "react";
import { Link } from "react-router-dom";
import Offers from "./pages/TradeOffers";
import MyRequests from "./pages/MyRequests";
import OrgTix from "./pages/OrgTix";
import AllTix from "./pages/AllTix";
import Historyy from "./pages/Historyy";
import News from "./pages/News";
import addWatcher from "./pages/addWatcher";
import AddTicket from "./pages/AddTicket";
import AddSubscription from "./pages/AddSubscription";
import Watcher from "./Watcher/Watcher";
// import Test from "./pages/Test"


const Navpills = props => (

  <div>

    <ul class="nav nav-tabs" id="myTab" role="tablist">
    
    <li class="nav-item">
        <a class="nav-link active" id="addWatcher-tab" data-toggle="pill" href="#addWatcher" role="tabpanel" aria-controls="addWatcher" aria-selected="false">Find</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" id="addSubscription-tab" data-toggle="pill" href="#addSu3bscription" role="tabpanel" aria-controls="addSubscription" aria-selected="false">Sub</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" id="addTicket-tab" data-toggle="pill" href="#addTicket" role="tabpanel" aria-controls="addTicket" aria-selected="false">Add</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link active" id="myRequests-tab" data-toggle="pill" href="#myRequests" role="tab" aria-controls="myRequests" aria-selected="true">My Requests</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" id="offers-tab" data-toggle="pill" href="#offers" role="tab" aria-controls="offers" aria-selected="false">My Offers</a>
      </li>
      {/* Org tix and all tix should be a toggle within one feed */}
    </ul>

    <div class="tab-content" id="myTabContent">

    <div class="tab-pane fade" id="addWatcher" role="tabpanel" aria-labelledby="addWatcher-tab">
      <Watcher/>
      </div>

      <div class="tab-pane fade" id="addSubscription" role="tabpanel" aria-labelledby="addSubscription-tab">
      <AddSubscription/>
      </div>


      <div class="tab-pane fade" id="addTicket" role="tabpanel" aria-labelledby="addTicket-tab">
      <AddTicket/>
      </div>

      <div class="tab-pane fade" id="myRequests" role="tabpanel" aria-labelledby="myRequests-tab">
      <MyRequests/>
      </div>

      <div class="tab-pane fade" id="offers" role="tabpanel" aria-labelledby="offers-tab">
      <Offers/>
      </div>


    </div>

  </div>
);

export default Navpills;

// BackLog:


// <li class="nav-item">
  //      <a class="nav-link" id="orgTix-tab" data-toggle="pill" href="#orgTix" role="tab" aria-controls="orgTix" aria-selected="false">orgTix</a>
   //   </li>

     // <li class="nav-item">
       // <a class="nav-link active" id="allTix-tab" data-toggle="pill" href="#allTix" role="tabpanel" aria-controls="allTix" aria-selected="false">allTix</a>
//      </li>

  //    <li class="nav-item">
    //    <a class="nav-link" id="history-tab" data-toggle="pill" href="#history" role="tabpanel" aria-controls="history" aria-selected="false">History</a>
      //</li>
      
      // <li class="nav-item">
        // <a class="nav-link" id="news-tab" data-toggle="pill" href="#news" role="tabpanel" aria-controls="news" aria-selected="false">News</a>
      // </li>  

      // <div class="tab-pane fade" id="orgTix" role="tabpanel" aria-labelledby="orgTix-tab">
      // <OrgTix/>
      // </div>

      // <div class="tab-pane fade show active" id="allTix" role="tabpanel" aria-labelledby="allTix-tab">
      // <AllTix/>
      // </div>

      // <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">
      // <Historyy/>
      // </div>

      // <div class="tab-pane fade" id="news" role="tabpanel" aria-labelledby="news-tab">
      // <News/>
      // </div>      