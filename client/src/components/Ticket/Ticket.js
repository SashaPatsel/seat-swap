import React, { Component } from "react";
import Input from "../Form/Input";
import "./Ticket.css";
import API from "./../../utils/API";

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tixDate: "",
      seatSec: "",
      seatRow: "",
      seatNum: "",
      eventTitle: "",
      status: "",
      subscription: 0,
      OrganizationId: "",
      SubscriptionId: "",
      UserId: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    this.getUserId();

  }

  getUserId = () => {
    const cookie = document.cookie.split(";");
      console.log("cookie", cookie)
    let userID = cookie[0];
      userID = userID.split("=");
      userID = userID[1];
      console.log("userID:", userID);
    this.setState({UserId: userID});
  }

  // function getUserId (cb) {
  //   const cookie = document.cookie.split(";");
  //     console.log("cookie", cookie)
  //   let userID = cookie[0];
  //     userID = userID.split("=");
  //     userID = userID[1];
  //     console.log("userID:", userID);
  //   this.setState({UserId: userID});
  //   cb(userID)

  // }



  getSubscriptionInfo = () => {
    console.log(this.state.UserId);

    API.getAllSubs(this.state.UserId)
    .then(res => {
      console.log("res", res);
    }).catch(err => 
      console.log(err)
    );
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    console.log("change", event.target.value);
  };

  handleSubmit(event) {
    event.preventDefault();

    this.getSubscriptionInfo()


    fetch("/api/tickets", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        date: this.state.tixDate,
        seatSec: this.state.seatSec,
        seatRow: this.state.seatRow,
        seatNum: this.state.seatNum,
        eventTitle: this.state.eventTitle,
        status: this.state.status,
        subscription: this.state.subscription,
        OrganizationId: this.state.OrganizationId,
        SubscriptionId: this.state.SubscriptionId,
        UserId: this.state.UserId
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response  => {
      console.log(response);

      window.location.href = "/";
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="col-10">          
        <form onSubmit={this.handleSubmit}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title">
                <p>What is the name of the event?</p>
              </div>
              <div className="panel-body">
                <div className="section-content">
                  <Input
                    value={this.state.eventTitle}
                    onChange={this.handleChange}
                    name="eventTitle"
                    placeholder="Name of Event"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title">
                <p><span className="glyphicon glyphicon-calendar"></span> Date of Your Ticket: </p> 
              </div>
              <div className="panel-body">
                <div className="section-content">                   
                  <div className="select-date">
                      <input placeholder="Event Date mm/dd/yyyy" name="tixDate" type="date"value={this.state.tixDate} onChange={this.handleChange}/> 
                  </div>               
                </div>
              </div>
            </div>
          </div>
          
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title">
                <p>Seat Section:</p>
              </div>
              <div className="panel-body">
                <div className="section-content">
                  <Input
                    value={this.state.seatSec}
                    onChange={this.handleChange}
                    name="seatSec"
                    placeholder="Seat Section"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title">
                <p>Seat Row:</p>
              </div>
              <div className="panel-body">
                <div className="section-content">
                  <Input
                    value={this.state.seatRow}
                    onChange={this.handleChange}
                    name="seatRow"
                    placeholder="Seat Row"
                  />
                </div>
              </div>
            </div>
          </div>

        <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title">
                <p>Seat Number:</p>
              </div>
              <div className="panel-body">
                <div className="section-content">
                  <Input
                    value={this.state.seatNum}
                    onChange={this.handleChange}
                    name="seatNum"
                    placeholder="Seat Number"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title">
                <p>Ticket Status</p>
              </div>
              <div className="panel-body">
                <div className="section-content">
                  <div className="select">
                    <select className="form-control" value={this.state.status} onChange={this.handleChange} name="status">
                      <option value="locked">locked</option>
                      <option value="available">available</option>
                      <option value="flexible">flexible</option>
                      <option value="gone">gone</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <input type="submit" value="Save" />
        </form>
 
      </div>
    );
  }
}

export default Ticket;