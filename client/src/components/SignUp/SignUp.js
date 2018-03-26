import React, { Component } from "react";
// import "./Form.css";
import {BrowserRouter as Router} from "react-router-dom";
import axios from "axios";
// import Google from "../Google";


class SignUp extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
  
    event.preventDefault();

    fetch("/auth/signup", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      data: {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }}).then(response  => {
      console.log(response)
      //console.log(response.headers.get("content-type"));
    }).catch(err => {
      console.log(err);
    })

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
          <div>
            <a href="/auth/google">Google SignUp</a>
          </div>
          <div>
            <a href="/auth/facebook">Facebook SignUp</a>
          </div>
        <form className="form" >
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
