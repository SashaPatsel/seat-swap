import React, {Component} from "react";
import API from "./../../utils/API";
import Input from "../Form/Input";

class UpdateTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId:"",
      allTickets: [],
      ticketId: "",
      status: "locked"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleStatusSubmit = this.handleStatusSubmit.bind(this);
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
    setTimeout(this.getTicketsInfo(userID), 2000);
  }

  handleChange = event => { 
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };  
  
  getTicketsInfo = id => {
    API.getTixForUser(id)
    .then(res => {
      this.setState({allTickets: res.data});
      console.log("allTickets", this.state.allTickets);
    }).catch(err => 
      console.log(err)
    );
  }

  handleStatusSubmit(event) {
    event.preventDefault();
    console.log("statussubmit", this.state.UserId, this.state.ticketId, this.state.status);

    fetch("/api/tickets/" + this.state.ticketId, {
      method: "PUT",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        status: this.state.status
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
      <div>
        <div className="col-10">
          <form onSubmit={this.handleStatusSubmit}>
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title">
                  <p>Update this ticket</p>
                </div>
                <div className="panel-body">
                  <div className="section-content">
                    <select className="form-control" value={this.state.ticketId} onChange={this.handleChange} name="ticketId" > 
                        <option value=""></option>
                        {this.state.allTickets.map(ticket => {
                          return <optgroup><option key={ticket.id} value={ticket.id}>Event: {ticket.eventTitle}</option>
                          <option key={ticket.id} value={ticket.id} disabled>Date: {ticket.date.split("T")[0]}</option>
                          <option key={ticket.id} value={ticket.id} disabled>Current Status: {ticket.status}</option></optgroup>
                        })}                     
                    </select>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title">
                  <p>Update Ticket Status To:</p>
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

          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
    )
  }
}

export default UpdateTickets;