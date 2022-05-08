import React from "react";
import { Hamburger } from "../Hamburger/Hamburger";
import { Nav } from "../Nav/Nav";
import type { NavProps } from "../../types/types";
import "./Header.scss";

export const Header = ({ data, setData }: NavProps) => {

  return (
      <div className="header">
        <Hamburger />
        <span>Calendar</span>
        <Nav data={data} setData={setData}/>
      </div>
  )
}