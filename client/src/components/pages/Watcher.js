import React, { Component } from "react";

class Watcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrganizationId: "1",
      numberOfSeats: "1",
      eventDate: "",
      UserId:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    console.log("abc", event.target.value)

    const cookie = document.cookie.split(";");
      console.log("cookie", cookie)
    let userID = cookie[0];
      userID = userID.split("=");
      userID = userID[1];
      console.log("userID:", userID);
    this.setState({UserId: userID});
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log('org', this.state.OrganizationId, 'seat', this.state.numberOfSeats)
    console.log("submit, date:", this.state.eventDate);
    var date = this.state.eventDate;
    this.setState({
      eventDate:  date + " 03:00:00"
    })
    console.log("changed date:", this.state.eventDate);
    console.log("UseId", this.state.UserId);

    fetch("/api/watchers", {
      method: 'POST',
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        OrganizationId: this.state.OrganizationId,
        eventDate: this.state.eventDate,
        numberOfSeats: this.state.numberOfSeats,
        UserId: this.state.UserId
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
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
                <p>What tickets do you want?</p>
              </div>
              <div className="panel-body">
                <div className="section-content">                 
                  <div className="select">
                    <select className="form-control" value={this.state.OrganizationId} onChange={this.handleChange} name="OrganizationId">
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
                <p>How many seats do you want?</p>
              </div>
              <div className="panel-body">
                <div className="section-content">
                  <div className="select">
                    <select className="form-control" value={this.state.numberOfSeats} onChange={this.handleChange} name="numberOfSeats">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title">
                <p>Date:</p>
              </div>
              <div className="panel-body">
                <div className="section-content">                   
                  <div className="select-date">
                      <input placeholder="Event Date mm/dd/yyyy" name="eventDate" type="date"value={this.state.eventDate} onChange={this.handleChange}/> 
                    <span className="glyphicon glyphicon-calendar"></span>
                  </div>               
                </div>
              </div>
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
 
      </div>
    );
  }
}

export default Watcher;
