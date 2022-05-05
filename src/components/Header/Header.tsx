import React from "react";
import { Hamburger } from "../Hamburger/Hamburger";
import { Nav } from "../Nav/Nav";
import type { NavProps } from "../../types/interfaces";
import "./Header.scss";

export const Header: () => JSX.Element = () => {

  return (
      <div className="header">
        <Hamburger />
        <span>Calendar</span>
        <Nav />
      </div>
  )
}