import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingHeader.scss";
export const LandingHeader = () => {
  return (
    <header className="landing-header">
      
      <div className="landing__logo">Calendar</div>

      <div className="landing__links">
        <NavLink to="/login" className={ ({ isActive }) => isActive ? "active-link" : "inactive-link"}>Login</NavLink>
        <NavLink to="/" className={ ({ isActive }) => isActive ? "active-link" : "inactive-link"}>Signup</NavLink>
        <NavLink to="/about" className={ ({ isActive }) => isActive ? "active-link" : "inactive-link"}>About</NavLink>
      </div>

    </header>
  )
}
