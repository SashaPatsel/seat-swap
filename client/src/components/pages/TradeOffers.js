import React from "react";
import API from "../../utils/API";
import List from "../MatchList";
import ListItem from "../MatchListItem";
import OfferList from "../MatchOfferList";
// import OfferListItem from "../MatchOfferListItem";
import { Button, Icon } from 'semantic-ui-react';


class Offers extends React.Component {
  state = {
    matches: [],
    offers: [],
    UserID: ""
  };

  getAllMatches = (id) => {
    API.getAllMatches(id)
      .then(res => {
        console.log(res.data)

        this.setState({
          matches: res.data,
          offers: res.data
        })
      })
      .catch(err => console.log(err));
      console.log(this.state.offers)
  };

  getUserId = () => {
    const cookie = document.cookie.split(";");
    console.log("cookie", cookie)
    let userID = cookie[0];
    userID = userID.split("=");
    userID = userID[1];
    console.log("userID:", userID);
    this.setState({ UserId: userID });
    setTimeout(this.getAllMatches(userID), 500)
  }

  sendTradeOffer = (id, SwapticketId) => {
    API.sendTradeOffer(id, SwapticketId)
      .then(res => {
        console.log(id, SwapticketId)
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getUserId();
  }

  convertDate(newDate) {
    let d = new Date(newDate);
    let n = d.toLocaleString();
    return n
  }
  render() {

    return (
      <div className="navTabs" id="trade-offers">
        <div className="nav-content">

          <h1 className="TOHead">Interest in my Tickets</h1>
          <List>
            {this.state.matches.map(match => (
              <ListItem key={match.id} id={match.Ticket.id}

              >
                {/* convertDate={() => this.convertDate(match.Ticket.date)} */}
                <strong className="myAvail" >{match.Ticket.eventTitle}</strong>
                <br />
                ({this.convertDate(match.Ticket.date)})

                <OfferList id={match.Ticket.id}>
                  <li>
                    <table>
                      <thead>
                      <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Section</th>
                        <th>Row</th>
                        <th>Number</th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody>
                      {match.Watcher.User.Tickets.map
                           (tix => (
                            
                          <tr>
                            <td>{tix.eventTitle}</td>
                            <td>{this.convertDate(tix.date)}</td>
                            <td>{tix.seatSec}</td>
                            <td>{tix.seatRow}</td>
                            <td>{tix.seatNum}</td>
                            <td> < button className="offerButton" onClick={() => this.sendTradeOffer(match.id, tix.id)}>Send Offer!</button></td>
                          </tr>
                            
                      ))}
                      </tbody>
                    </table>
                  </li>
                </OfferList>
              </ListItem>
            ))}
          </List>
        </div >
      </div >
    );
  }
}

export default Offers;

// To do:
// - Remotely open the feed
// - Calendar clickability (could be solved if remotely open is solved)
// - Avoid double trade entries cause by double loop
// - Give NavPills absolute position. everything else scrolls
// - resize calendar appropriately

// - presentable landing page
// - Joyce's two get routes asynchronicity
// - my post route 
// - parameters on front end
