import React from "react";
import { Hamburger } from "../Hamburger/Hamburger";
import { Nav } from "../Nav/Nav";
import "./Header.scss";

export const Header = () => {
  return (
      <div className="header">
        <Hamburger />
        <span>Calendar</span>
        <Nav />
      </div>
  )
}