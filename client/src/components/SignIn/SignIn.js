import React, { Component } from "react";
// import googlelogo from "../pages/images/google.png";
// import fblogo from "../pages/images/fb.png";
import "./SignIn.css";

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
            type="text"
            placeholder="Password"
          />
          <div className="row" id="click" onClick={this.handleFormSubmit}>Submit</div>
        </form>
        <div className="row" id="landing-link">
          <a href="/auth/google">Login with Google</a>
        </div>
        <div className="row" id="landing-link">
          <a href="/auth/facebook">Login with Facebook</a>
        </div>
      </div>
    );
  }
}

export default SignIn;
