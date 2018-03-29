import React from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import List from "../MatchList";
import ListItem from "../MatchListItem";


class Offers extends React.Component {
  state = {
    matches: []
  };

  getAllMatches = () => {
    API.getAllMatches()
        .then(res => {
            console.log(res.data)
            this.setState({ 
              matches: res.data
            })
        })
        .catch(err => console.log(err));
};


componentDidMount() {
  this.getAllMatches();
}

  render() {
    return (
      <div className="navTabs">
        <h1>Offers Page</h1>
          <List>
            {this.state.matches.map(match =>(
              match.Watcher.User.Tickets.map(tix =>(
                <ListItem key={match.id}>
                {tix.eventTitle}
                {tix.seatSec}
                {tix.seatRow}
                {tix.seatNum}
             </ListItem>  
              ))

            ))}

          </List>  
      </div>
    );
  }
}

export default Offers;