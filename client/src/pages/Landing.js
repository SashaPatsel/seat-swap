import React, { Component } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import logo from "../images/logo-1.png";
import Button from "../components/Button";
import AuthButton from "../components/AuthButton";
import Input from "../components/Form/Input"
import Modal from "../components/Modal"
import Card from "../components/Card"


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
				<div className="intro__parallax"></div>
				<section className="intro">

					<h1 className="intro__heading--main">Seat Swap</h1>

					<h2 className="intro__heading--sub">Never miss an event</h2>

					<img className="intro__heroes intro__heroes-1" src="https://images.pexels.com/photos/45258/ballet-production-performance-don-quixote-45258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" />
					<img className="intro__heroes intro__heroes-2" src="https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" />
					<img className="intro__heroes intro__heroes-3" src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

					<div className="intro__auth-container--local">
						<a href="#signUp">
							<Button type="submit" genre="bttn--white" id="click" onClick={this.handleFormSubmit} text="Start Swapping" />
						</a>

						<a href="#signIn"><p className="intro__login-link"> Login</p></a>
						<div className="intro__oauth">

							<p className="intro__oauth--or">Or sign up with one of our partners:</p>

							<a href="/auth/facebook">
								<AuthButton logo="https://1.bp.blogspot.com/-WSdqH3gMHDk/U-xndvvQYrI/AAAAAAAABwg/9OLHbIjiTF8/s1600/facebook%2Blogo%2Bpng%2Btransparent%2Bbackground.png" company="facebook" />
							</a>

							<a href="/auth/google">
								<AuthButton logo="http://backgroundcheckall.com/wp-content/uploads/2017/12/google-logo-transparent-background-4.png" company="google" />
							</a>
						</div>
					</div>
					<a href="#about" className="intro__scroll-contain">
						<i className="fa fa-angle-double-down intro__scroll"></i>
					</a>
				</section>

				<Modal modal="signUp" exitDestination="#" h1="Sign Up">
					<SignUp />
				</Modal>

				<Modal modal="signIn" exitDestination="#" h1="Sign In">
					<SignIn />
				</Modal>



				<div className="landing-about" id="about">
					<h2 className="landing-about__heading">See it all</h2>
					<div className="container">
						<div className="row">
							<div class="col-md-3">
								<Card img="https://images.unsplash.com/photo-1449748040579-354c191a7934?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjIxMTIzfQ&s=7bee13000bedc1de01bb9d5e43168d54&auto=format&fit=crop&w=1950&q=80">
									<p className="landing-about__card-text">
									Keep track of all your tickets in one centralized place.
									</p>
								</Card>
							</div>
							<div class="col-md-3">
								<Card img="https://images.unsplash.com/photo-1532089006065-de61ca171e56?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ba70aba13c3634a61c4bfbd6cf24f792&auto=format&fit=crop&w=1950&q=80">
								<p className="landing-about__card-text">
									Find tickets for all the events you want to see.
								</p>
								</Card>
							</div>
							<div class="col-md-3">
								<Card img="https://images.unsplash.com/photo-1527684002373-02a02a68e86f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1debe1a90ad0be0d448cd2b115bde98e&auto=format&fit=crop&w=1595&q=80">
								<p className="landing-about__card-text">
									Propose ticket trades to other users.
									</p>
								</Card>
							</div>
							<div class="col-md-3">
								<Card img="https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af90f024facc8921c9bf854da77f222a&auto=format&fit=crop&w=1950&q=80">
								<p className="landing-about__card-text">
									Browse through tickets until you find the trade that's right for you.
									</p>
								</Card>
							</div>
						</div>
					</div>
				</div>

			</div>


		)
	}
}

export default Landing;