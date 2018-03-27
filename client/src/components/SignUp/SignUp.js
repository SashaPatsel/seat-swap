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
      firstname: "",
      lastname: "",
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

    console.log("email, pwd", this.state.email, this.state.password);

    fetch("/auth/signup", {
      method: 'POST',
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response  => {
      console.log(response)
      //console.log(response.headers.get("content-type"));

      window.location.href = "/";
    }).catch(err => {
      console.log(err);
    })

    this.setState({
      firstname: "",
      lastname: "",
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
            value={this.state.firstname}
            name="firstname"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastname}
            name="lastname"
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
