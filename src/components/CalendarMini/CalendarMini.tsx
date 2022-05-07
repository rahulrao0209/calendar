import React, { useState, useEffect } from "react";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import type { Data, monthData } from "src/types/interfaces";
import { getMonthData } from "../../utils/getMonthData";
import "./CalendarMini.scss";

export const CalendarSmall = ({ data }: Data) => {

    const [miniData, setMiniData] = useState<monthData[]>([]);
    const [month, setMonth] = useState(new Date().getMonth());

    const handleNext = () => {
        console.log("SET MONTH");
        setMonth(month + 1);
    };

    const handlePrev = () => {
        console.log("SET MONTH");
        setMonth(month - 1);
    };

    useEffect(() => {
      setMiniData(getMonthData(month))
    }, [month]);

    useEffect(() => {
        setMiniData(data);
    }, [data]);

    return (
        <div className="calendar-mini">
            
            <div className="calendar-mini__nav">
            <div className="calendar-mini__month">{miniData[miniData.length - 1]?.monthName} {miniData[miniData.length - 1]?.year}</div>
                <div className="calendar-mini__nav-controls">
                    <span className="nav__controls--previous" onClick={handlePrev}>
                        <IoCaretBack className="icon--prev" />
                    </span>
                    <span className="nav__controls--next" onClick={handleNext}>
                        <IoCaretForward className="icon--next"/>
                    </span>
                </div>
            </div>

            <div className="calendar-mini__week">
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
            </div>
            <div className="calendar-mini__calendar">
            {miniData.map((item, index) => {
             return (
               <div className="calendar-mini__cell" key={index}>
                 <span className="calendar-mini__month">{item.day}</span>
               </div>
            )
        })}
            </div>
        </div>
    )
}