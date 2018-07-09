import React, { Component } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import logo from "../images/logo-1.png"


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
				<div className="landing__hero"></div>
				<section className="about">
					<div className="row about__signup">
						<div className="about__signup-box">
							<div className="about__signup-box--form">
								<SignUp />
							</div>
								<img className="about__logo" src={logo}/>
							<div className="header__text-box">
								<h1 className="heading-primary"><span className="heading-primary--1">Seat</span> <span className="heading-primary--2">Swap</span></h1>

								<h2 className="heading-secondary">Never miss an event</h2>
							</div>
						</div>

						<div className="header__menu">
						</div>
					</div>
				</section>
				{/* <SignIn /> */}
			</div>
		)
	}
}

export default Landing;