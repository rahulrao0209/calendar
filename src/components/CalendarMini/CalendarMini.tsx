import React, { useState, useEffect, useRef } from "react";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import type { MainProps, monthData } from "src/types/types";
import { isToday } from "../../utils/isToday";
import { getMonthData } from "../../utils/getMonthData";
import "./CalendarMini.scss";

export const CalendarSmall = ({ data, setData }: MainProps) => {

    const [miniData, setMiniData] = useState<monthData[]>([]);
    const [month, setMonth] = useState(new Date().getMonth());
    const clickedDay = useRef<HTMLElement | null>(null);

    // Today
    const todayStyle = {
        'color': '#fff',
        'backgroundColor': '#5e7a6e'
    }

    const handleNext = () => {
        console.log("SET MONTH");
        setMonth(month + 1);
    };

    const handlePrev = () => {
        console.log("SET MONTH");
        setMonth(month - 1);
    };

    const handleDayClick = (event: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLSpanElement>) => {
        
        setData(miniData);

        const currentNode = event.currentTarget.parentElement;
    
        if(currentNode != clickedDay.current) {
            clickedDay.current?.classList.remove('calendar-mini__cell--clicked');
            clickedDay.current = currentNode;
            clickedDay.current?.classList.add('calendar-mini__cell--clicked');
        } else if(currentNode === clickedDay.current) {
            clickedDay.current?.classList.remove('calendar-mini__cell--clicked');
        }
    }

    useEffect(() => {
      setMiniData(getMonthData(month));
      clickedDay.current?.classList.remove('calendar-mini__cell--clicked');
      clickedDay.current = null;
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
             
             let isCurrentDayToday = isToday(item);

             return (
               <div className="calendar-mini__cell" key={index} style={isCurrentDayToday ? todayStyle: {}} >
                 <span className="calendar-mini__day" onClick={handleDayClick}>{item.day}</span>
               </div>
            )
        })}
            </div>
        </div>
    )
}