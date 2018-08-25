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
  console.log(this.state)
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
        <form onSubmit={this.handleFormSubmit}>
          <Input
            value={this.state.firstname}
            name="firstname"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
            id="fName"
            htmlFor="fName"
            label="First Name"
          />
          <Input
            value={this.state.lastname}
            name="lastname"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
            id="lName"
            htmlFor="lName"
            label="Last Name"
          />
          <Input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email Address"
            id="email"
            htmlFor="email"
            label="Email Address"
          />
          <Input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
            id="pword"
            htmlFor="pword"
            label="Password"
          />
          <Button type="submit" genre="btn--secondary popup__button" id="click"  text="Sign Up"/>
        </form>
      </div>
    );
  }
}

export default SignUp;
