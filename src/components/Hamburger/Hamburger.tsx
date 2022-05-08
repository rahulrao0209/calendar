import React from "react";
import type { HamburgerProps } from "src/types/types";
import "./Hamburger.scss";

export const Hamburger = ({ setDrawerClosed }: HamburgerProps) => {

    const handleHamburger = () => {
      setDrawerClosed(drawerClosed => !drawerClosed);
    }

    return (
        <div className="menu" onClick={handleHamburger}>
          <div className="menu__hamburger"></div>
        </div>
    )
}