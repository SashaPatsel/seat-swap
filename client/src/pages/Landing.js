import React, { Component } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";


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
	}
	render() {
		return (
			<div className="landing" id="landing">
				<section className="header">
			
		
				</section>
				<section className="about"> 
							<div className="row header__signup">
						<div className="header__signup-box">
							<div className="header__signup-box--form">
								<SignUp />
							</div>
						</div>
					</div>
				</section>	
				{/* <SignIn /> */}
			</div>
		)
	}
}

export default Landing;