import React, {Component} from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

class Landing extends Component {
	render() {
		return (
			<div> 
				<SignUp/>
				<SignIn/>
			</div>
		)
	}
}

export default Landing;