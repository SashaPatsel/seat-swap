import React from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import List from "../MatchList";
import ListItem from "../MatchListItem";
import OfferList from "../MatchOfferList";
import OfferListItem from "../MatchOfferListItem";


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


  componentDidMount() {
    this.getAllMatches();
  }

  render() {
    return (
      <div className="navTabs" id="trade-offers">
        <div className="nav-content">
          <h1>Offers Page</h1>
          <List>
            {this.state.matches.map(match => (
              <ListItem>

                <strong>{match.Ticket.eventTitle}</strong>
                <br />

                <OfferList>
                  {this.state.offers.map(tix => (
                    <OfferListItem>
                      {tix.Ticket.eventTitle}
                      {tix.Watcher.User.Tickets.eventTitle} @ {tix.Watcher.User.Tickets.date}
                      <br />
                      Section: {tix.Watcher.User.Tickets.seatSec}
                      <br />
                      Row: {tix.Watcher.User.Tickets.seatRow}
                      <br />
                      Seat: {tix.Watcher.User.Tickets.seatNum}

                    </OfferListItem>
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