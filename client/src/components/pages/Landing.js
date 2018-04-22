import React, { Component } from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
// import Banner from "../Banner";
// import Banner2 from "../Banner2";
import "./Landing.css";
import JoinUs from "../JoinUs"
import Modal from 'react-responsive-modal';
// import Nav from "../Nav"
//fadein/fadeout components for background?

const styles = {
	giants: {
		background: 'url(https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350) no-repeat fixed',
		backgroundSize: "cover",
		height: "100%",
		width: "100%", 
		position: "absolute"

	},
	symphony: {
		background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHTG_r2EuJi7xeEL2_Eko9VXBDhQG0V80JyADS5fMS-ftXD4o) no-repeat fixed',
		backgroundSize: "cover",
		height: "100%",
		width: "100%",
		position: "absolute"
	},
	warriors: {
		background: 'url(https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-s3.si.com%2Fs3fs-public%2Fstyles%2Fmarquee_large_2x%2Fpublic%2F2015%2F06%2F05%2Foracle-arena-warriors.jpg%3Fitok%3DD4IcX6-B&w=700&q=85) no-repeat fixed',
		backgroundSize: "cover",
		height: "100%",
		width: "100%",
		position: "absolute"
	},
	mainContainer: {
		textAlign: "center",
		color: "white",
	}
}

class Landing extends Component {

	state = {
		changingBackground: "giants",
		open: false,
		showCloseIcon: true
	}



	componentDidMount() {
		const landing = this
		this.changeBackground()

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
					<h2 className="roboto">The Bay Area's Ticket Exchange</h2>
					<JoinUs
						modal={this.onOpenModal}
					/>
				</div>
        <Modal open={open} onClose={this.onCloseModal} little>
				<div className="row" id="login">
						<div className="col-xs-12 col-sm-12 col-md-6" id="signup-container">
							<SignUp />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-6" id="signin-container">
							<SignIn />
						</div>
					</div>
        </Modal>

				
			</div>
		)
	}
}

export default Landing;

