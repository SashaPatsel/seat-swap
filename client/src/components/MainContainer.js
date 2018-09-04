import React, { Component } from 'react';
import Landing from "../pages/Landing";
// import Home from "../pages/Home"
import YourTickets from "../pages/YourTickets"
import PendingTrades from "../pages/PendingTrades"
import TradeOffers from "../pages/TradeOffers"
import FindTickets from "../pages/FindTickets"

import Nav from './Nav'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class MainContainer extends Component {
	render() {
		if (document.cookie.length > 0) {
			return (
			<div>
				<Nav />

				<Router location="HistoryLocation"> 
					<Switch>
						<Route exact path="/" component={YourTickets} />
						<Route exact path="/trades" component={PendingTrades} />
						<Route exact path="/offers" component={TradeOffers} />
						<Route exact path="/find" component={FindTickets} />
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

