import React, { useEffect, useState } from "react";
import { IoCaretBack, IoCaretForward, IoCaretDown } from "react-icons/io5";
import { getMonthData } from "../../utils/getMonthData";
import type { monthData } from "../../types/interfaces";
import "./Nav.scss";

export const Nav: () => JSX.Element = () => {
    
    const [month, setMonth] = useState(new Date().getMonth());
    const [data, setData] = useState<monthData[]>([]);

    console.log("Data: ", data);
    useEffect(() => {
      setData(getMonthData(month));
    }, [month]);

    console.log("MONTH: ", month);
    const handleNext = () => {
        console.log("SET MONTH");
        setMonth(month + 1);
    }

    const handlePrev = () => {
        console.log("SET MONTH");
        setMonth(month - 1);
    }

    return (
        <div className="nav">
            <nav className="nav__left">
                <div className="nav__today">Today</div>

                <div className="nav__controls">
                    <span className="nav__controls--previous" onClick={handlePrev}>
                        <IoCaretBack className="icon--prev" />
                    </span>
                    <span className="nav__controls--next" onClick={handleNext}>
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