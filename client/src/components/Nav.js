import React from "react";


const Nav = props => (
<nav class="navbar navbar-default ss-nav">
    <div class="container-fluid">
 
        <div class="navbar-header">
        
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
              <img className="logo" src="https://www.shareicon.net/download/2015/10/05/651639_cinema_512x512.png" />
            </a>
        </div>

        <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="/logout">Sign out</a></li>

                </ul>
            </li>
        </ul>

    </div>

</nav>
    
  
);

export default Nav;