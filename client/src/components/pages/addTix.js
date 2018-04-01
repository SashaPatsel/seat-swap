import React, {Component} from "react";
//import Subscription from "../Subscription";
//import Ticket from "../Ticket";
import Input from "../Form/Input";
import API from "./../../utils/API";
import SubscriptionDropdown from "../SubscriptionDropdown"

class addTix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrganizationId: "",
     	subName: "",
      UserId:"",
      tixDate: "",
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
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({UserId: userID});
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
    console.log("submit", this.state.OrganizationId, this.state.subName, this.state.UserId);

    fetch("/api/subscriptions", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        OrganizationId: this.state.OrganizationId,
        name: this.state.subName,
        UserId: this.state.UserId
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response  => {
      console.log(response);

      this.getSubscriptionInfo(this.state.UserId)

      //window.location.href = "/";
    }).catch(err => {
      console.log(err);
    })
  }

	getSubscriptionInfo = id => {
    console.log(id);

    API.getAllSubs(id)
    .then(res => {
      // this.setState({SubscriptionId: (res.data.length-1)});
      this.setState({allSubscriptions: res.data});
      console.log(this.state.allSubscriptions);
      
    }).catch(err => 
      console.log(err)
    );
  }


	handleTixSubmit(event) {
    event.preventDefault();
    console.log("tixsubmit", this.state.OrganizationId, this.state.subName, this.state.UserId, this.SubscriptionId);

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



      //window.location.href = "/";
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div> 
      	<div className="col-10">          
          <form onSubmit={this.handleSubmit}>
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title">
                  <p>What have you subscribed to?</p>
                </div>
                <div className="panel-body">
                  <div className="section-content">                 
                    <div className="select">
                      <select className="form-control" value={this.state.OrganizationId} onChange={this.handleChange} name="OrganizationId">
                        <optgroup label="Pick One">
                          <option value=""></option>
                        </optgroup>
                        <optgroup label="Sports">
                          <option value="1">Golden State Warriors</option>
                          <option value="2">San Francisco Giants</option>
                          <option value="3">San Francisco 49ers</option>
                          <option value="4">Oakland Raiders</option>
                          <option value="5">Los Angeles Lakers</option>
                        </optgroup>
                        <optgroup label="Art & Music">
                          <option value="6">San Francisco Symphony</option>
                          <option value="7">San Francisco Ballet</option>
                          <option value="8">San Francisco Opera</option>
                          <option value="9">Metropolitan Opera</option>
                          <option value="10">Lyric Opera of Chicago</option>
                          <option value="11">Chicago Symphony Orchestra</option>
                          <option value="12">Canegie Hall</option>
                        </optgroup>
                      </select> 
                    </div>                                  
                  </div>
                </div>
              </div>
            </div>
            
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title">
                  <p>Subscription Name:</p>
                </div>
                <div className="panel-body">
                  <div className="section-content">
                    <Input
                      value={this.state.subName}
                      onChange={this.handleChange}
                      name="subName"
                      placeholder="My Subscription"
                    />
                  </div>
                </div>
              </div>
            </div>
            <input id="save-sub" type="submit" value="Save" />
          </form>
        </div>

        <div className="col-10">
      	  <form onSubmit={this.handleTixSubmit}>
      	    
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title">
                  <p>Add tickets to the following subscription:</p>
                </div>
                <div className="panel-body">
                  <div className="section-content">                 
                    <div className="select">
                      <select className="form-control" value={this.state.SubscriptionId} onChange={this.handleChange} name="SubscriptionId">

                          {this.state.allSubscriptions.map(subscription => {
                            return <SubscriptionDropdown
                            key={subscription.id}
                            id={subscription.id}
                            name={subscription.name}
                            />
                          })}
                      </select>
                    </div>                                  
                  </div>
                </div>
              </div>
            </div>
      	                
        
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
      </div>


    )
  }
}

export default addTix;