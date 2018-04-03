import React, { Component } from "react";
import { Button, Icon } from 'semantic-ui-react';

const Nav = () => (
<nav className="navbar navbar-default ss-nav">
    <div className="container-fluid">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
                <img className="logo" src="https://www.shareicon.net/download/2015/10/05/651639_cinema_512x512.png" />
            </a>
        </div>

        {/* <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">  <Icon id="manage-prof" name='user circle' />  <span className="caret"></span></a>
                <ul className="dropdown-menu">
                    <li></li>
                </ul>
            </li>
        </ul> */}
        <a href="/logout" className="signOut">Sign out</a>
    </div>
</nav>
    
  
);

export default Nav;