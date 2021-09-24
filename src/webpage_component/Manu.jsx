import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Manu = () => {

  return (
    <>
    
      <div class="rc_nav" id="centered_nav">
      <h1 id="title">Sayaib Sarkar</h1>
        
        <NavLink exact activeClassName="active_class" className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active_class" className="nav-link" to="/portfolio">
        Portfolio
        </NavLink>
        <NavLink exact activeClassName="active_class" className="nav-link" to="/Codes">
        Codes
        </NavLink>
        <NavLink exact activeClassName="active_class" className="nav-link" to="/contact">
        Contact
        </NavLink>
      </div>
    </>
  );
};

export default Manu;
