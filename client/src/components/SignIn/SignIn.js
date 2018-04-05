import React, { Component } from "react";
import "./SignIn.css";
import fblogo from "./fblogo.png";
import googlelogo from "./google.png";

class SignIn extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
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

    fetch("/auth/signin", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response  => {
      console.log(response)

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
        <div className="row">
          <h3>Sign In</h3>
        </div>
        <br/>
        <br/>
        <form className="form" method="POST" action="http://localhost:5000/signin">
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
            type="password"
            placeholder="Password"
          />
          <input type="submit" className="row auth-button" id="click" onClick={this.handleFormSubmit} Submit />
        </form>
        <br/>
        <div className="row" id="landing-link">
          <div className="col-xs-12 col-sm-6 col-md-6 text-right">
            <a href="/auth/google"><img alt="googlelogin" src={googlelogo} id="googlelogo"/></a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 text-left">
            <a href="/auth/facebook"><img alt="facebooklogin" src={fblogo} id="fblogo"/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
