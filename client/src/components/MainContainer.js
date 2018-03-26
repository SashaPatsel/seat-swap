import React, { Component } from 'react';
import Landing from "./pages/Landing";
import Home from "./pages/Home"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class MainContainer extends Component {
	render() {
		var isLoggedIn = document.cookie.length > 0;
		if(!isLoggedIn) {
			return (
			<Router>
				<Switch>
					<Route path="*" component={Landing} />
				</Switch>
			</Router>
			)
		}

		return (
			<div>
				<Router> 
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</div>
		)
	}


}

export default MainContainer;