import React from "react";
import { Hamburger } from "../Hamburger/Hamburger";
import { Nav } from "../Nav/Nav";
import type { NavProps } from "../../types/interfaces";
import "./Header.scss";

export const Header: (props: NavProps) => JSX.Element = ({data, setData}) => {

  return (
      <div className="header">
        <Hamburger />
        <span>Calendar</span>
        <Nav data={data} setData={setData}/>
      </div>
  )
}