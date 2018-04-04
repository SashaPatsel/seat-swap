import React, {Component} from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Banner from "../Banner";
import Banner2 from "../Banner2";
import "./Landing.css";

class Landing extends Component {
	render() {
		return (
			<div id="landing-container">
				<div className="row" id="first-banner">
					<Banner />
				</div>
				<div className="row" id="second-banner">
					<Banner2 />
				</div>
				<div className="row" id="third-banner">
					<Banner />
				</div>
				<div className="row" id="login">
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