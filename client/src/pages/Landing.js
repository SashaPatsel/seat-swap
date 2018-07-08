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
			<div className="landing" id="landing"> 
			<div className="row">
				<div className="landing__signup-box">
				<div className="landing__signup-box--form">
				<SignUp/>
				</div>
				</div>
			</div>
				<SignIn/>
			</div>
		)
	}
}

export default Landing;