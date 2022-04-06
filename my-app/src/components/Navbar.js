import React from 'react'
import logo from "../logo3.png";
//REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import{faBars} from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className ="container">
  <a className="navbar-brand" href="#"><img src={logo} alt="logo..."/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon  icon={faBars}  style={{color: "#fff"}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Our Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Our work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Our Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">News</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Store</a>
        <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      </li>
    </ul>
  
  </div>

  </div> </nav>
  )
}

export default navbar
