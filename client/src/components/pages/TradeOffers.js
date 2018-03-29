import React from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import List from "../MatchList";


class Offers extends React.Component {
  getAllMatches = () => {
    API.getAllMatches()
        .then(res => {
            console.log(res.data)
            // this.getTix(res.data)
        })
        .catch(err => console.log(err));
};


  render() {
    return (
      <div className="navTabs">
        <h1>Offers Page</h1>
          <List>
          </List>  
      </div>
    );
  }
}

export default Offers;