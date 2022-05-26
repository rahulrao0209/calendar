import React from "react";
import { isToday } from "../../utils/isToday";
import type { CalendarProps } from "../../types/types";
import { findMatchingEvents } from "../../utils/findMatchingEvents";
import { colorMap } from "../Drawer/Drawer";
import "./Calendar.scss";

export const todayStyle = {
  'color': '#fff',
  'backgroundColor': '#e6a770'
}

export const Calendar = ({ data, eventList, displayEventsByColor, setEventDay, setShowModal, setOpenedEvent }: CalendarProps) => {
  
  const handleClick = (event: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLSpanElement>) => {
    if(typeof(event.currentTarget.dataset.value) === "string") {
      setEventDay(JSON.parse(event.currentTarget.dataset.value));
      setShowModal(true);
    }
  }

  const handleEventClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if(typeof(event.currentTarget.dataset.value) === "string") {
      setOpenedEvent(JSON.parse(event.currentTarget.dataset.value))
    }

    setShowModal(true);
  }

    return (
        <div className="calendar">
          {data.map((item, index) => {
            let isCurrentDayToday = isToday(item);
            let matchingEvents = findMatchingEvents(eventList, item);
             return (
               <div className="calendar__cell" key={index} onClick={handleClick} data-value={JSON.stringify(item)}>
                 <span className="calendar__day">{item.dayName}</span>
                 <span className="calendar__month" style={isCurrentDayToday ? todayStyle: {}}>{item.day}</span>
                 <div className="calendar__event">
                  { matchingEvents?.map((event, index) => 
                    // @ts-ignore
                  displayEventsByColor[colorMap.get(event.color).toLowerCase()] ? 
                  <div
                    key={index}
                    data-value={JSON.stringify(event)}
                    onClick={handleEventClick}
                    style={{ 'backgroundColor': event.color }}
                  >
                      {event.title}
                  </div> : null)}
                 </div>
               </div>
            )
        })}
        </div>
    );
}