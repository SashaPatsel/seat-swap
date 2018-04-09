import React, { Component } from "react";
import { Button, Icon } from 'semantic-ui-react';

const Nav = () => (
<nav className="navbar navbar-default ss-nav">
    <div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="#">
                <img className="logo" src="https://www.shareicon.net/download/2015/10/05/651639_cinema_512x512.png" />
            </a>
            <a href="#">
            <h2 className="nav-brand">Seat Swap</h2>
            </a>
        </div>
        <a href="/logout" className="signOut">Sign Out</a>
    </div>
</nav>
    
  
);

export default Nav;