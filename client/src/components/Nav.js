import React, { Component } from "react";
import NavIcon from "./NavIcon";

const Nav = () => (
<nav className="navigation">

            {/* <a className="navbar-brand" href="#">
                <img className="logo" src="https://www.shareicon.net/download/2015/10/05/651639_cinema_512x512.png" />
            </a> */}
        
    <div className="navigation__nav">
        <NavIcon icon="fa-ticket-alt" label="Your Tickets"/>
        {/* Goes inside your tickets */}
        {/* <NavIcon icon="fa-plus" label="Add Tickets"/> */}
        <NavIcon icon="fa-search" label="Find Tickets"/>
        <NavIcon icon="fa-handshake" label="Pending Trades"/>
        <NavIcon icon="fa-envelope" label="Offers for my Tickets"/>
        <NavIcon icon="fa-sign-out-alt" label="Sign Out" destination="/logout"/>
      </div>  
        
        {/* <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">  <Icon id="manage-prof" name='user circle' />  <span className="caret"></span></a>
                <ul className="dropdown-menu">
                    <li></li>
                </ul>
            </li>
        </ul> */}
 
</nav>
    
  
);

export default Nav;