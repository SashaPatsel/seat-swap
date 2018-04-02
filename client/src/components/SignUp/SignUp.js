import React, { Component } from "react";
// import googlelogo from "../pages/images/google.png";
// import fblogo from "../pages/images/fb.png";
import "./SignUp.css";

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
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname
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
        <div className="col-xs-12 col-sm-12 col-md-12" id="signup-container">
        <h1>Sign Up</h1>
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
          <p onClick={this.handleFormSubmit}>Submit</p>
        </form>
        <div id="landing-link">
          <a href="/auth/google">Sign Up with Google</a>
        </div>
        <div id="landing-link">
          <a href="/auth/facebook">Sign Up with Facebook</a>
        </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
