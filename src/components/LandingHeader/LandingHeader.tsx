import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingHeader.scss";
export const LandingHeader = () => {
  return (
    <header className="landing-header">
      
      <div className="landing__logo">Calendar</div>

      <div className="landing__links">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="">Signup</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

    </header>
  )
}
