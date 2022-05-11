import React from "react";
import { isToday } from "../../utils/isToday";
import type { MainProps } from "../../types/types";
import "./Calendar.scss";

export const todayStyle = {
  'color': '#fff',
  'backgroundColor': '#5e7a6e'
}

export const Calendar = ({ data }: MainProps) => {
    return (
        <div className="calendar">
          {data.map((item, index) => {
            let isCurrentDayToday = isToday(item);
             return (
               <div className="calendar__cell" key={index}>
                 <span className="calendar__day">{item.dayName}</span>
                 <span className="calendar__month" style={isCurrentDayToday ? todayStyle: {}}>{item.day}</span>
               </div>
            )
        })}
        </div>
    );
}