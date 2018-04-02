import React, {Component} from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import "./Landing.css";

class Landing extends Component {
	render() {
		return (
			<div className="landing-container">
				<h1 id="title text-center">Seats Swap</h1>
				<div id="paralax">
					<SignUp/>
					<SignIn/>
				</div>
			</div>
		)
	}
}

export default Landing;