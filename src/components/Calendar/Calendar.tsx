import React from "react";
import type { Data } from "../../types/types";
import "./Calendar.scss";

export const Calendar = ({ data }: Data) => {
    return (
        <div className="calendar">
          {data.map((item, index) => {
             return (
               <div className="calendar__cell" key={index}>
                 <span className="calendar__day">{item.dayName}</span>
                 <span className="calendar__month">{item.day}</span>
               </div>
            )
        })}
        </div>
    );
}