import React, { Component } from "react";
import Input from "../Form/Input"
import Button from "../Button"


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
        <form className="form" method="POST" action="http://localhost:5000/signin">
          <Input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email Address"
          />
          <Input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <div className="popup__button">
            <Button type="submit" id="click" onClick={this.handleFormSubmit} text="Sign In" genre="btn--secondary popup__button" />
          </div>
        </form>

        
      </div>
    );
  }
}

export default SignIn;
