import React, { Component } from "react";
import { Button, Icon } from 'semantic-ui-react';

const Nav = props => (
    <nav className="navbar navbar-default ss-nav">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img className="logo" src="https://www.shareicon.net/download/2015/10/05/651639_cinema_512x512.png" />
                    </a>
                </div>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <h2 className="nav-brand">Seat Swap</h2>
                </a>
                </div>
                <div className="col-md-5"></div>
                <div className="col-md-2">
                <a href="/logout" className="signOut">Sign {props.inOut}</a>
                </div>
            </div>
        </div>
    </nav>


);

export default Nav;