import React, {Component} from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Banner from "../Banner";
import "./Landing.css";

class Landing extends Component {
	render() {
		return (
			<div id="landing-container">
				<div className="col-12 banner">
					<h1>Seats Swap</h1>
				</div>
				<Banner />
				<div id="login">
					<div className="col-xs-12 col-sm-12 col-md-6" id="signup-container">
						<SignUp/>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-6" id="signin-container">
						<SignIn/>
					</div>
				</div>
			</div>
		)
	}
}

export default Landing;