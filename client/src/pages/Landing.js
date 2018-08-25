import React, { Component } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import logo from "../images/logo-1.png";
import Button from "../components/Button";
import AuthButton from "../components/AuthButton";
import Input from "../components/Form/Input"
import Modal from "../components/Modal"


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

				<section className="intro">

					<h1 className="intro__heading--main">Seat Swap</h1>

					<h2 className="intro__heading--sub">Never miss an event</h2>

					<img className="intro__heroes intro__heroes-1" src="https://images.pexels.com/photos/45258/ballet-production-performance-don-quixote-45258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" />
					<img className="intro__heroes intro__heroes-2" src="https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" />
					<img className="intro__heroes intro__heroes-3" src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

					<div className="intro__auth-container--local">
					<a href="#auth">
						<Button type="submit" genre="btn--white" id="click" onClick={this.handleFormSubmit} text="Start Swapping" />
						</a>

						<a href="#auth"><p className="intro__login-link"> Login</p></a>
						<div className="intro__oauth">

						<p className="intro__oauth--or">Or sign up with one of our partners:</p>

						<a href="/auth/facebook">
						<AuthButton logo="https://1.bp.blogspot.com/-WSdqH3gMHDk/U-xndvvQYrI/AAAAAAAABwg/9OLHbIjiTF8/s1600/facebook%2Blogo%2Bpng%2Btransparent%2Bbackground.png" company="facebook"/>
						</a>

						<a href="/auth/google">
						<AuthButton logo="http://backgroundcheckall.com/wp-content/uploads/2017/12/google-logo-transparent-background-4.png" company="google"/>
						</a>
						</div>
					</div>

				</section>

				<Modal modal="auth" exitDestination="#" h1="Log In">
					<form>
						<Input label="E-Mail"/>
						<Input label="Password" type="password"/>
					</form>	
				</Modal>

			</div>
			// <div className="landing" id="landing">
			// 	<div className="landing__hero"></div>
			// 	<section className="about">
			// 		<div className="row about__signup">
			// 			<div className="about__signup-box">
			// 				<div className="about__signup-box--form">
			// 					<SignUp />
			// 				</div>
			// 					<img className="about__logo" src={logo}/>
			// 				<div className="header__text-box">
			// 					<h1 className="heading-primary"><span className="heading-primary--1">Seat</span> <span className="heading-primary--2">Swap</span></h1>

			// 					<h2 className="heading-secondary">Never miss an event</h2>
			// 				</div>

			// 				<h3></h3>
			// 			</div>

			// 			<div className="header__menu">
			// 			</div>
			// 		</div>
			// 	</section>

			// </div>


		)
	}
}

export default Landing;