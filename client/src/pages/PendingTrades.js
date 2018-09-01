import React from "react";
import API from "./../utils/API";
import List from "../components/MatchList";
import ListItem from "../components/MatchListItem";
import OfferList from "../components/MatchOfferList";
import DeleteBtn from "../components/DeleteButton";
import AcceptOffer from "../components/AcceptOffer"



class PendingTrades extends React.Component {

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
        console.log("farley")
        console.log(res.data)
      })
      .catch(err => console.log(err));
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

  deleteWatcher = id => {
    API.deleteWatcher(id)
      .then(res => {
        console.log(res.data)
        // refresh virtual dom so watcher disappears after click
       this.getInfo(this.state.UserID)
      })
      .catch(err => console.log(err));
  }

  showTrades(swap) {
    //Need to render only if swaptix !== null
  }
  render() {

    return (

      <div>
        <h1 className="TOHead">Pending Trades</h1>
        <List>
          {this.state.matches.map(match => (
            <ListItem key={match.id} id={match.id}
            >
              <strong className="myAvail" >{match.Organization.name}</strong>

              <button class="delete-watcher" >
                <DeleteBtn onClick={() => this.deleteWatcher(match.id)} />
              </button>
              <br/>
              {this.convertDate(match.eventDate)}
              <OfferList id={match.id}>
                <li>
                  <br />
                  <h4 className="watchInstruct">What They Want From You</h4>
                  <table>
                    <thead>
                    <tr>
                      <th>Their Ticket</th>
                      <th>Your Ticket</th>
                      <th>Accept</th>
                    </tr>
                    </thead>
                    {/* {this.showTrades(match.Matches)} */}
                    {/* {this.showTrades(match.Matches)} */}
                    <tbody>
                    {match.Matches.map(tix => (
                      tix.SwapticketId ?
                        <tr>
                          <td>{tix.Ticket.seatSec} | {tix.Ticket.seatRow} | {tix.Ticket.seatNum}</td>
                          <td><strong>{tix.Swapticket.eventTitle}</strong> | {tix.Swapticket.seatSec} | {tix.Swapticket.seatRow} | {tix.Swapticket.seatNum}</td>
                          <td><AcceptOffer onClick={() => this.finalizeTrade(tix.id)} /></td>
                        </tr>
                        : null
                    ))}
                    </tbody>
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

export default PendingTrades;

//Problems:
//1. Cannot identify dropdowns by id (id must be unique)
//2. Cannot replace null values
//3. cannot .toString() seatNum
//4. Dont render match if swap is null
//delete watcher, not rject trade