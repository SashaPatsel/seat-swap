import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { Input, FormBtn } from "../../components/Form";

class Watcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrganizationId: "",
      numberOfSeats: "",
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
    
    //     this.setState({
    //   eventDate: event.target.value + " 03:00:00"
    // })


    // console.log('date', this.state.eventDate);
    

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
    console.log("UseId", this.state.UserId);

    console.log("dateInt", parseInt(this.state.numberOfSeats));
    
  
    API.addWatcher({
      // if (this.state.OrganizationId && this.state.eventDate && this.state.numberOfSeats && this.state.UserId) {
        OrganizationId: this.state.OrganizationId,
        eventDate: this.state.eventDate,
        numberOfSeats: this.state.numberOfSeats,
        UserId: this.state.UserId
      // }
    }).then(response => 
      console.log("abcdef")
      // this.setState({
      //   OrganizationId: "",
      //   eventDate: "",
      //   numberOfSeats: "",
      //   UserId:""
      // })
      ).catch(err => {
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
                  <div className="select" onSubmit={this.handleSubmit}>
                    <select className="form-control" value={this.state.OrganizationId} onChange={this.handleChange} name="OrganizationId">
                      <option value="1">Golden State Warriors</option>
                      <option value="2">San Francisco Giants</option>
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
                  <div className="select" onSubmit={this.handleSubmit}>
                    <select className="form-control" value={this.state.numberOfSeats} onChange={this.handleChange} name="numberOfSeats">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
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
                  <div className="abc" onSubmit={this.handleSubmit}>
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
