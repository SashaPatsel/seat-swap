import React from "react";
import { Link } from "react-router-dom";
import Offers from "./pages/TradeOffers";
import MyRequests from "./pages/MyRequests";
import OrgTix from "./pages/OrgTix";
import AllTix from "./pages/AllTix";
import Historyy from "./pages/Historyy";
import News from "./pages/News";
import AddTicket from "./pages/AddTicket";
import AddSubscription from "./pages/AddSubscription";
import Watcher from "./Watcher/Watcher";


const Navpills = props => (

  <div>

    <ul className="nav nav-tabs" id="myTab" role="tablist">
          
    <li className="nav-item">
        <a className="nav-link active" id="myRequests-tab" data-toggle="pill" href="#myRequests" role="tab" aria-controls="myRequests" aria-selected="true">My Requests</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" id="offers-tab" data-toggle="pill" href="#offers" role="tab" aria-controls="offers" aria-selected="false">My Offers</a>
      </li>

<<<<<<< HEAD
    <li className="nav-item">
        <a className="nav-link active" id="addWatcher-tab" data-toggle="pill" href="#addWatcher" role="tabpanel" aria-controls="addWatcher" aria-selected="false">Find Tickets</a>
=======
    <li class="nav-item">
        <a class="nav-link" id="addWatcher-tab" data-toggle="pill" href="#addWatcher" role="tabpanel" aria-controls="addWatcher" aria-selected="false">Find Tickets</a>
>>>>>>> b40aa9e37923cb4ce157233d2b76b9efdb25381c
      </li>

      <li className="nav-item">
        <a className="nav-link" id="addSubscription-tab" data-toggle="pill" href="#addSubscription" role="tabpanel" aria-controls="addSubscription" aria-selected="false">My Subs</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" id="addTicket-tab" data-toggle="pill" href="#addTicket" role="tabpanel" aria-controls="addTicket" aria-selected="false">Add Tickets</a>
      </li>



      {/* Org tix and all tix should be a toggle within one feed */}
    </ul>

    <div className="tab-content" id="myTabContent">

<<<<<<< HEAD
    <div className="tab-pane fade" id="addWatcher" role="tabpanel" aria-labelledby="addWatcher-tab">
=======
      <div class="tab-pane fade" id="myRequests" role="tabpanel" aria-labelledby="myRequests-tab">
      <MyRequests/>
      </div>

    <div class="tab-pane fade" id="addWatcher" role="tabpanel" aria-labelledby="addWatcher-tab">
>>>>>>> b40aa9e37923cb4ce157233d2b76b9efdb25381c
      <Watcher/>
      </div>

      <div className="tab-pane fade" id="addSubscription" role="tabpanel" aria-labelledby="addSubscription-tab">
      <AddSubscription/>
      </div>


      <div className="tab-pane fade" id="addTicket" role="tabpanel" aria-labelledby="addTicket-tab">
      <AddTicket/>
      </div>

<<<<<<< HEAD
      <div className="tab-pane fade" id="myRequests" role="tabpanel" aria-labelledby="myRequests-tab">
      <MyRequests/>
      </div>

      <div className="tab-pane fade" id="offers" role="tabpanel" aria-labelledby="offers-tab">
=======
      <div class="tab-pane fade" id="offers" role="tabpanel" aria-labelledby="offers-tab">
>>>>>>> b40aa9e37923cb4ce157233d2b76b9efdb25381c
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