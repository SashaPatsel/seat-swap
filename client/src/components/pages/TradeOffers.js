import React from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import List from "../MatchList";
import ListItem from "../MatchListItem";
import OfferList from "../MatchOfferList";
import OfferListItem from "../MatchOfferListItem";
import { Button, Icon } from 'semantic-ui-react';


class Offers extends React.Component {
  state = {
    matches: [],
    offers: []
  };

  getAllMatches = () => {
    API.getAllMatches()
      .then(res => {
        console.log(res.data)

        this.setState({
          matches: res.data,
          offers: res.data
        })
      })
      .catch(err => console.log(err));
  };

  sendTradeOffer = () => {
    API.sendTradeOffer()
      .then(res => {
        console.log(res.data)

      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getAllMatches();
  }

  render() {
    return (
      <div className="navTabs" id="trade-offers">
        <div className="nav-content">
          <h1>Interest in my Tickets</h1>
          <List>
            {this.state.matches.map(match => (
              <ListItem key={match.id} id={match.Ticket.id}>
                <strong className="myAvail" doSomething={this.chicken}>{match.Ticket.eventTitle}</strong>
                <br />
                <OfferList id={match.Ticket.id}>
                {/* id={this.match.Watcher.id} */}
                  {this.state.offers.map(x => (
                    x.Watcher.User.Tickets.map(tix => (
                      <OfferListItem key={tix.id} onClick={this.sendTradeOffer}>
                        {/* Div is highlighted in different color? with timedout message saying "trade request sent"? */}
                        
                      <br/>
                      {tix.eventTitle} @ {tix.date}
                      <br />
                      Section: {tix.seatSec}
                      <br />
                      Row: {tix.seatRow}
                      <br />
                      Seat: {tix.seatNum}
                    </OfferListItem>
                    ))
                  ))}
                </OfferList>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default Offers;

// To do:
// - Remotely open the feed
// - Calendar clickability (could be solved if remotely open is solved)
// - Open trade offers w/ dropdown (give list item and list unique ids)
// - Avoid double trade entries cause by double loop
// - Give NavPills absolute position. everything else scrolls
// - resize calendar appropriately

