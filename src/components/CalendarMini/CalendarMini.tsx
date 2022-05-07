import React from "react";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import type { Data } from "src/types/interfaces";
import "./CalendarMini.scss";

export const CalendarSmall = ({ data }: Data) => {
    return (
        <div className="calendar-mini">
            
            <div className="calendar-mini__nav">
            <div className="calendar-mini__month">{data[data.length - 1]?.monthName} {data[data.length - 1]?.year}</div>
                <div className="calendar-mini__nav-controls">
                    <span className="nav__controls--previous">
                        <IoCaretBack className="icon--prev" />
                    </span>
                    <span className="nav__controls--next">
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
            {data.map((item, index) => {
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