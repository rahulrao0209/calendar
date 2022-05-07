import React, { useEffect, useState } from "react";
import { IoCaretBack, IoCaretForward, IoCaretDown } from "react-icons/io5";
import { getMonthData } from "../../utils/getMonthData";
import type { NavProps } from "../../types/interfaces";
import "./Nav.scss";

export const Nav = ({ data, setData }: NavProps) => {
    
    const [month, setMonth] = useState(new Date().getMonth());

    useEffect(() => {
      setData(getMonthData(month));
    }, [month]);

    const handleNext = () => {
        console.log("SET MONTH");
        setMonth(month + 1);
    }

    const handlePrev = () => {
        console.log("SET MONTH");
        setMonth(month - 1);
    }

    const getToday = () => {
        console.log("GET TODAY");
        setMonth(new Date().getMonth());
    }

    return (
        <div className="nav">
            <nav className="nav__left">
                <div className="nav__today" onClick={getToday}>Today</div>

                <div className="nav__controls">
                    <span className="nav__controls--previous" onClick={handlePrev}>
                        <IoCaretBack className="icon--prev" />
                    </span>
                    <span className="nav__controls--next" onClick={handleNext}>
                        <IoCaretForward className="icon--next"/>
                    </span>
                </div>

                <div className="nav__month">{data[data.length - 1]?.monthName} {data[data.length - 1]?.year}</div>
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