import React, { Component } from "react";
import Input from "../Form/Input"
import Button from "../Button"

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
        <form >
          <Input
            value={this.state.firstname}
            name="firstname"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
            id="fName"
            for="fName"
            label="First Name"
          />
          <Input
            value={this.state.lastname}
            name="lastname"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
            id="lName"
            for="lName"
            label="Last Name"
          />
          <Input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email Address"
            id="email"
            for="email"
            label="Email Address"
          />
          <Input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
            id="pword"
            for="pword"
            label="Password"
          />
          <Button type="submit" className="btn btn-prim" id="click" onClick={this.handleFormSubmit} text="Sign Up"/>
        </form>
      </div>
    );
  }
}

export default SignUp;
