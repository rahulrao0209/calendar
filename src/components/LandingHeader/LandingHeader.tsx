import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingHeader.scss";
export const LandingHeader = () => {
  return (
    <header className="landing-header">
      
      <div className="landing__logo">Calendar</div>

      <div className="landing__links">
        <NavLink to="">Login</NavLink>
        <NavLink to="">Signup</NavLink>
        <NavLink to="">About</NavLink>
      </div>

    </header>
  )
}
