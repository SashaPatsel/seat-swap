import React, {Component} from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Button from "../components/Button"

class Landing extends Component {
state = {
	scrollY: 0
}
	componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll(event) {
	this.setState({
		scrollY: window.scrollY
	})
	console.log(this.state.scrollY)

}
	render() {
		return (
			<div id="landing"> 
				<SignUp/>
				<SignIn/>
				<Button text="Sign Up &rarr;" type="btn--primary"/>
			</div>
		)
	}
}

export default Landing;