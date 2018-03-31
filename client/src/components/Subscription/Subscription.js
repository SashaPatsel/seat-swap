import React, { Component } from "react";
import Input from "../Form/Input";
import "./Subscription.css";

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrganizationId: "",
      subName: "",
      UserId:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.getUserId();
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    console.log("change", event.target.value);
  };

  getUserId = () => {
    const cookie = document.cookie.split(";");
      console.log("cookie", cookie)
    let userID = cookie[0];
      userID = userID.split("=");
      userID = userID[1];
      console.log("userID:", userID);
    this.setState({UserId: userID});
  }

  handleSubmit(event) {
    event.preventDefault();

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
          <input type="submit" value="Save" />
        </form>
 
      </div>
    );
  }
}

export default Subscription;