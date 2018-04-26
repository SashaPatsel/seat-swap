import React from "react";
import "./Banner2.css";

const Banner2 = props => (
	<div id="banner2">
		<div className="container-fluid banner2">
			<h1 className="banner-text main-title">Seat Swap</h1>
			<h2 className="banner-text">The Bay Area's Ticket Exchange</h2>
			{props.children}
		</div>
	</div>
);

export default Banner2;