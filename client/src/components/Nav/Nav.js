import React from "react";
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

  {/* <div className="navbar-brand"><img src={require('./ensSmall.png')}/></div> */}
   
    <div className="collapse navbar-collapse" id="myNavbar">
    
      <ul className="nav navbar-nav navbar-right">

        <li><a href="#myPage">HOME</a></li>
        <li><a href="#band">MEMBERSHIP</a></li>
        <li><a href="#tour">EVENTS</a></li>
        <li><a href="#contact">CONTACT</a></li>

        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">AWARDS
          <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">ENS Poster Award</a></li>
            <li><a href="#">Betsy Love McClung Award</a></li>
            <li><a href="#">Media</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">GRANTS
          <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Clinical Project Grant</a></li>
            <li><a href="#">Clinical Research Grant</a></li>
            <li><a href="#">Travel Grant Application</a></li>
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






