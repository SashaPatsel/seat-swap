import React from "react";

const OfferListItem = props => (
  <li className="offer-select" >
    {props.children}
    <table>
      <tr>
        <th>Event</th>
        <th>Date</th>
        <th>Section</th>
        <th>Row</th>
        <th>Number</th>
      </tr>
      <tr>
        <td>{props.eventTitle}</td>
        <td>{props.date}</td>
        <td>{props.seatSec}</td>
        <td>{props.seatRow}</td>
        <td>{props.seatNum}</td>
      </tr>
    </table>
  </li>
);

export default OfferListItem;