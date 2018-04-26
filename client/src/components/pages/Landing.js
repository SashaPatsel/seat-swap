import React, { Component } from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import "./Landing.css";
import JoinUs from "../JoinUs";
import Modal from 'react-modal';



class Landing extends Component {

	state = {
		changingBackground: "giants",
		show: "hide"
	}

	showAuth() {
		this.setState({
			show: ""
		})
	}

	render() {
		const { open } = this.state;

		return (
			<div id="landing-container" className={this.state.changingBackground}>
				<div className="landing-content">
					<h1 className="roboto main-title">Seat Swap</h1>
					<h2 className="roboto main-sub">The Bay Area's Ticket Exchange</h2>
					<JoinUs
						onClick={() => this.showAuth()}
					/>
				</div>
				<div className={this.state.show}>
					<div className="col-md-2"></div>
					<div className="col-md-8 authenticate">
						<div className="row" id="login">
							<div className="col-xs-12 col-sm-12 col-md-6" id="signup-container">
								<SignUp />
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6" id="signin-container">
								<SignIn />
							</div>
						</div>
					</div>
					<div className="col-md-2"></div>
				</div>
			</div>
		)
	}
}

export default Landing;

