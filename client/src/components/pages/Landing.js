import React, { Component } from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
// import Banner from "../Banner";
// import Banner2 from "../Banner2";
import "./Landing.css";
import JoinUs from "../JoinUs";
import { findDOMNode } from "react-dom";
// import Modal from "../Modal";
// import $ from "jquery";
// import Nav from "../Nav"
//fadein/fadeout components for background?


class Landing extends Component {

	state = {
		changingBackground: "giants",
		open: false,
		showCloseIcon: true,
		
	}

	componentDidMount() {
		const landing = this
		// this.changeBackground()
		// $("#initModal").modal("show")
		// $("#myModal").modal();
	}

	changeBackground() {
		const backgrounds = ["giants", "warriors", "symphony"]
		let bGroundIndex = 0
		const landing = this
		setInterval(function () {

			if (bGroundIndex >= (backgrounds.length - 1)) {
				bGroundIndex = 0;
			} else {
				bGroundIndex++;
			}

			landing.newBackground(backgrounds[bGroundIndex])
		}, 4000)

	}

	newBackground(i) {
		this.setState({
			changingBackground: i
		})
	}


	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};
	render() {
		const { open } = this.state;

		return (
			<div id="landing-container" className={this.state.changingBackground}>
				<div className="landing-content">
					<h1 className="roboto main-title">Seat Swap</h1>
					<h2 className="roboto main-sub">The Bay Area's Ticket Exchange</h2>
					<JoinUs
						modal={this.onOpenModal}
					/>
				</div>

	
				
				{/* <Modal 
				
				/> */}
				{/* <Modal open={open} onClose={this.onCloseModal} little
				showCloseIcon = {this.state.showCloseIcon}
				>
				<div className="row" id="login">
						<div className="col-xs-12 col-sm-12 col-md-6" id="signup-container">
							<SignUp />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-6" id="signin-container">
							<SignIn />
						</div>
					</div>
        </Modal> */}
			<div class="chicken"></div>


			</div>
		)
	}
}

export default Landing;

