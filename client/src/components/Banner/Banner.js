import React from "react";
import "./Banner.css";



class Banner extends React.Component {
	state = {
		backgroundImg: "attPark"
	}
	
	componentDidMount () {
		// this.changeBackground()
		
	}



changeBackground() {
	 const banner = this;
	 
	setInterval(function(){
		let imgIndex = 0 ;
		const bannerImgs = ["sfOpera", "oracle", "sfSymphony", "niners", "attPark"]
		imgIndex++
		banner.setState({
			backgroundImg: bannerImgs[imgIndex]
		})
	 
	 console.log(imgIndex)
	}, 4000)

}

	render() {

		return (
			<div className={this.state.backgroundImg}>

				<div className="container-fluid banner">
					<br />
				</div>
			</div>
		)
	}
}



export default Banner;