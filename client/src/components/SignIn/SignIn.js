import React, { Component } from "react";
// import "./Form.css";
import {BrowserRouter as Router} from "react-router-dom";
import axios from "axios";
// import Google from "../Google";
// import Facebook from "../Facebook";

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

    axios.post("/auth/signin", {
      email: this.state.email,
      password: this.state.password
    }).then(response  => {
      console.log(response)
    }).catch(err => {
      console.log(err);
    })

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {

    return (
      <div>
        <div>
          <a href="/auth/google">Google SignIn</a>
        </div>
        <div>
          <a href="/auth/facebook">Facebook SignIn</a>
        </div>
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
            type="text"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
