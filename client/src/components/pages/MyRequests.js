import React from "react";
import "./myRequest.css";
import API from "./../../utils/API";
// import TradeCard from "../TradeCard"
import List from "../MatchList";
import ListItem from "../MatchListItem";
import OfferList from "../MatchOfferList";
import { Button, Icon } from 'semantic-ui-react';
import DeleteBtn from "../DeleteButton";



class MyRequests extends React.Component {

  state = {

    matches: [],
    offers: [],
    UserID: ""
  };



  componentDidMount() {
    this.getUserId();
  }

  getUserId = () => {
    const cookie = document.cookie.split(";");
    console.log("cookie", cookie)
    let userID = cookie[0];
    userID = userID.split("=");
    userID = userID[1];
    console.log("userID:", userID);
    this.setState({ UserId: userID });
    setTimeout(this.getInfo(userID), 500)
  }

  getInfo = id => {
    API.getWatcherAndMatch(id)
      .then(res => {
        this.setState({
          matches: res.data,
          offers: res.data,
        })
        console.log(this.state.matches)
      })
      .catch(err => console.log(err));
  }

  finalizeTrade = id => {
    API.finalizeTrade(id)
    .then(res => {
      console.log(res.data)
    })
  }

  ifNull(swap) {
    if (swap === null) {
      return ("No Matches")
    } else {
      return swap
    }
  }

  convertDate(newDate) {
    let d = new Date(newDate);
    let n = d.toLocaleString();
    return n
  }

  render() {

    return (

      <div>
        <h1 className="TOHead">Pending Trades</h1>
        <List>
          {this.state.matches.map(match => (
            <ListItem key={match.id} id="1"
            >
              {/* convertDate={() => this.convertDate(match.Ticket.date)} */}
              <strong className="myAvail" >{match.Organization.name}</strong>
              <br />
              ({this.convertDate(match.eventDate)})

                <OfferList id="1">
                <li>
                  <h4>What They Want From You</h4>
                  <table>
                    <tr>
                      <th>Their Ticket</th>
                      <th>Your Ticket</th>
                      <th>Accept</th>
                      <th>Delete</th>
                    </tr>
                    {match.Matches.map(tix => (
                      
                      <tr>
                        <td>{tix.Ticket.eventTitle} {tix.Ticket.seatSec} | {tix.Ticket.seatRow} | {tix.Ticket.seatNum}</td>
                        
                        <td><strong>{this.ifNull(tix.Swapticket).eventTitle}</strong> | {this.ifNull(tix.Swapticket).seatSec} | {this.ifNull(tix.Swapticket).seatRow} | {this.ifNull(tix.Swapticket).seatNum}</td>
                        <td>< button onClick={() => this.finalizeTrade(tix.id)}>Accept!</button></td>
                        <td><button><DeleteBtn/> </button></td>
                      </tr>
                    ))}
                  </table>
                </li>
              </OfferList>
            </ListItem>
          ))}
        </List>


      </div>

    )


  }
}

export default MyRequests;

//Problems:
//1. Cannot identify dropdowns by id (id must be unique)
//2. Cannot replace null values
//3. cannot .toString() seatNum
//4. Dont render match if swap is null