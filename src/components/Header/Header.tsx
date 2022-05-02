import React from "react";
import { Hamburger } from "../Hamburger/Hamburger";
import "./Header.scss";

export const Header = () => {
  return (
      <div className="header">
        <Hamburger />
        <span>Calendar</span>

      </div>
  )
}