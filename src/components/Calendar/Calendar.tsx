import React from "react";
import { isToday } from "../../utils/isToday";
import type { MainProps } from "../../types/types";
import "./Calendar.scss";
import { findMatchingEvents } from "../../utils/findMatchingEvents";

export const todayStyle = {
  'color': '#fff',
  'backgroundColor': '#e6a770'
}

export const Calendar = ({ data, state, eventList, setEventDay, setShowModal, setOpenedEvent }: MainProps) => {
  
  const handleClick = (event: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLSpanElement>) => {
    if(typeof(event.currentTarget.dataset.value) === "string") {
      setEventDay(JSON.parse(event.currentTarget.dataset.value));
      setShowModal(true);
    }
  }

  const handleEventClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if(typeof(event.currentTarget.dataset.value) === "string") {
      console.log("Clicked on event: ", event.currentTarget.dataset.value);
      setOpenedEvent(JSON.parse(event.currentTarget.dataset.value))
    }

    setShowModal(true);
    console.log("Clicked on Event: ", event.currentTarget.dataset.value);
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
                  <div
                    key={index}
                    data-value={JSON.stringify(event)}
                    onClick={handleEventClick}
                    style={{ 'backgroundColor': event.color }}
                  >
                      {event.title}
                  </div>) }
                 </div>
               </div>
            )
        })}
        </div>
    );
}