import React, {Component} from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

class Landing extends Component {
state = {
	scrollY: 0
}
	componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
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
doScroll() {
	console.log("yo")
}
	render() {
		return (
			<div> 
				<SignUp/>
				<SignIn/>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
					
			</div>
		)
	}
}

export default Landing;