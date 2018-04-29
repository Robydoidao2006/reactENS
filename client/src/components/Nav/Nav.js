import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  
<nav className="navbar navbar-default navbar-fixed-top">
  <div className="navbar-brand"><img src={require('./ensSmall.png')}/>
  </div>
    <div className="container-fluid">
      <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/">MEMBERSHIP</Link></li>
            <li><Link to="/">EVENTS</Link></li>
            <li><Link to="/">CONTACT</Link></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">AWARDS
              <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/">ENS Poster Award</Link></li>
                  <li><Link to="/">Betsy Love McClung Award</Link></li>
                  <li><Link to="/">Media</Link></li>
                </ul>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">GRANTS
              <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/">Clinical Project Grant</Link></li>
                  <li><Link to="/">Clinical Research Grant</Link></li>
                  <li><Link to="/">Travel Grant Application</Link></li>
                </ul>
            </li>
            <li><a href="."><span className="glyphicon glyphicon-search"></span></a></li>
          </ul>
        </div>
      </div>
    </div>
</nav>


);

export default Nav;






