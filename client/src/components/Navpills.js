import React from "react";
import { Link } from "react-router-dom";

const Navpills = () => (
  <ul className="nav nav-tabs">
    <li className= {window.location.pathname === "/requests" ? "active" : ""}>
      <Link to="/requests" className="n-pills">My Requests</Link>
    </li>
    <li className={window.location.pathname === "/tradeoffers" ? "active" : ""}>
      <Link to="/tradeoffers" className="n-pills">Trade Offers</Link>
    </li>
    <li className={window.location.pathname === "/orgtix" ? "active" : ""}>
      <Link to="/orgtix" className="n-pills"><span>Org</span> Tickets</Link>
    </li>
    <li className={window.location.pathname === "/alltix" ? "active" : ""}>
      <Link to="/alltix" className="n-pills">All Tickets</Link>
    </li>
    <li className={window.location.pathname === "/history" ? "active" : ""}>
      <Link to="/history" className="n-pills">History</Link>
    </li>
    <li className={window.location.pathname === "/News" ? "active" : ""}>
      <Link to="/News" className="n-pills">News</Link>
    </li>

    <li className={window.location.pathname === "/AllTickets" ? "active" : ""}>
    <Link to="/AllTickets" className="n-pills">ALL Tickets</Link>
    </li>

    <li className={window.location.pathname === "/addWatcher" ? "active" : ""}>
    <Link to="/addWatcher" className="n-pills">Find Tickets</Link>
    </li>

    <li className={window.location.pathname === "/addSubscription" ? "active" : ""}>
    <Link to="/addSubscription" className="n-pills">Add Subscription</Link>
    </li>

    <li className={window.location.pathname === "/addTicket" ? "active" : ""}>
    <Link to="/addTicket" className="n-pills">Add A Ticket</Link>
    </li>

  </ul>
);

export default Navpills;