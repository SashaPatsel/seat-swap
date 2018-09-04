import React, { Component } from "react";
import Input from "../components/Form/Input";
import API from "./../utils/API";
import Button from "../components/Button"

class AddTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: "",
      tixTime: "",
      seatSec: "",
      seatRow: "",
      seatNum: "",
      eventTitle: "",
      status: "locked",
      subscription: 0,
      OrganizationId: "",
      SubscriptionId: "",
      allSubscriptions: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleTixSubmit = this.handleTixSubmit.bind(this);
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
    setTimeout(this.getSubscriptionInfo(userID), 2000);
  }

  handleSelectChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    this.setState({ OrganizationId: event.target[event.target.selectedIndex].getAttribute("data-organizationid") })
  };


  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };


  getSubscriptionInfo = id => {
    API.getAllSubs(id)
      .then(res => {
        this.setState({ allSubscriptions: res.data });
        // console.log("allSub", this.state.allSubscriptions);
      }).catch(err =>
        console.log(err)
      );
  }

  handleTixSubmit(event) {
    event.preventDefault();
    console.log("tixsubmit", this.state.OrganizationId, this.state.UserId, this.state.SubscriptionId, this.state.tixTime);

    fetch("/api/tickets", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        date: this.state.tixTime,
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
    }).then(response => {
      console.log(response);
      this.setState({
        tixDate: "",
        seatSec: "",
        seatRow: "",
        seatNum: "",
        eventTitle: "",
        OrganizationId: "",
        SubscriptionId: ""
      })
      //window.location.href = "/";
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleTixSubmit}>



          <div className="your-tickets__new-tix--form-group">

            <p>Pick the subscription</p>
            <select className="form-control" value={this.state.SubscriptionId} onChange={this.handleSelectChange} name="SubscriptionId" >
              <option value=""></option>
              {this.state.allSubscriptions.map(subscription => {
                return <option key={subscription.id} value={subscription.id} data-organizationid={subscription.OrganizationId}>{subscription.name}</option>
              })}
            </select>



            <p>What is the name of the event?</p>
            <Input
              value={this.state.eventTitle}
              onChange={this.handleChange}
              name="eventTitle"
              placeholder="Name of Event"
            />

          </div>

          <div className="your-tickets__new-tix--form-group">

            <p><span className="glyphicon glyphicon-calendar"></span> Time of the Event: </p>


            <div className="select-time">
              <Input placeholder="Event Time" name="tixTime" type="datetime-local" value={this.state.tixTime} onChange={this.handleChange} />


              <p>Seat Section:</p>


              <Input
                value={this.state.seatSec}
                onChange={this.handleChange}
                name="seatSec"
                placeholder="Seat Section"
              />

            </div>
          </div>
          <div className="your-tickets__new-tix--form-group">

            <p>Seat Row:</p>


            <Input
              value={this.state.seatRow}
              onChange={this.handleChange}
              name="seatRow"
              placeholder="Seat Row"
            />

            <p>Seat Number:</p>

            <Input
              value={this.state.seatNum}
              onChange={this.handleChange}
              name="seatNum"
              placeholder="Seat Number"
            />
          </div>

          <p>Ticket Status</p>


          <select className="form-control" value={this.state.status} onChange={this.handleChange} name="status">
            <option value="locked">locked</option>
            <option value="available">available</option>
            <option value="flexible">flexible</option>
            <option value="gone">gone</option>
          </select>

          <div className="your-tickets__new-tix--button">    
          <Button type="submit" genre="btn--secondary popup__button" text="Add" />
          </div>
        </form>

      </div >
    )
  }
}

export default AddTicket;