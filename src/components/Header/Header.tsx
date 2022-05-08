import React from "react";
import { Hamburger } from "../Hamburger/Hamburger";
import { Nav } from "../Nav/Nav";
import type { HeaderProps } from "../../types/types";
import "./Header.scss";

export const Header = ({ nav, hamburger }: HeaderProps) => {

  const { drawerClosed, setDrawerClosed } = hamburger;
  const { data, setData } = nav;

  return (
      <div className="header">
        <Hamburger drawerClosed={drawerClosed} setDrawerClosed={setDrawerClosed}/>
        <span>Calendar</span>
        <Nav data={data} setData={setData}/>
      </div>
  )
}