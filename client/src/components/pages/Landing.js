import React, {Component} from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

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