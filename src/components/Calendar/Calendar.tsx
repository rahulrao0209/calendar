import React from "react";
import { isToday } from "../../utils/isToday";
import type { MainProps } from "../../types/types";
import "./Calendar.scss";

export const todayStyle = {
  'color': '#fff',
  'backgroundColor': '#e6a770'
}

export const Calendar = ({ data, state, eventList, setEventDay, setShowModal }: MainProps) => {
  
  console.log("EVENT IN CALENDAR: ", state);
  console.log("EVENTS: ", eventList);

  const handleClick = (event: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLSpanElement>) => {
    if(typeof(event.currentTarget.dataset.value) === "string") {
      setEventDay(JSON.parse(event.currentTarget.dataset.value));
      setShowModal(true);
    }
  }

    return (
        <div className="calendar">
          {data.map((item, index) => {
            let isCurrentDayToday = isToday(item);
             return (
               <div className="calendar__cell" key={index} onClick={handleClick} data-value={JSON.stringify(item)}>
                 <span className="calendar__day">{item.dayName}</span>
                 <span className="calendar__month" style={isCurrentDayToday ? todayStyle: {}}>{item.day}</span>
                 {/* <span className="test"></span> */}
               </div>
            )
        })}
        </div>
    );
}