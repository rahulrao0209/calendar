import React from "react";
import { IoCaretBack, IoCaretForward, IoCaretDown } from "react-icons/io5";
import type { NavProps } from "../../types/interfaces";
import "./Nav.scss";

export const Nav: (props: NavProps) => JSX.Element = ({ data, setMonth }) => {
    
    console.log("Data: ", data);
    const handleNav = () => {
        setMonth(10);
        console.log("SET MONTH");
    }

    return (
        <div className="nav">
            <nav className="nav__left">
                <div className="nav__today">Today</div>

                <div className="nav__controls">
                    <span className="nav__controls--previous" onClick={handleNav}>
                        <IoCaretBack className="icon--prev" />
                    </span>
                    <span className="nav__controls--next" onClick={handleNav}>
                        <IoCaretForward className="icon--next"/>
                    </span>
                </div>

                <div className="nav__month">May 2022</div>
            </nav>

            <nav className="nav__right">
                <div className="nav__format">
                    Month
                    <span><IoCaretDown className="icon--down"/></span>
                </div>
            </nav>
        </div>
    )
}