import React, { Component } from 'react';
import Landing from "./pages/Landing";
import Home from "./pages/Home"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class MainContainer extends Component {
	render() {
		if (document.cookie.length > 0) {
			return (
			<div>
				<Router> 
					<Switch>
						<Route path="/" component={Home} />
					</Switch>
				</Router>
			</div>
		) }

		
		return (
			<Router>
				<Switch>
					<Route path="*" component={Landing} />
				</Switch>
			</Router>
			)
		
	}


}

export default MainContainer;