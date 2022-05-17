import type { EventData, monthData } from "../types/types";

export const findMatchingEvents = (events: EventData[] | undefined, currentDay: monthData) => {
    const matchingEvents = events?.filter((event: EventData) => {
        return event.date.day === currentDay.day && event.date.monthName === currentDay.monthName && event.date.year === currentDay.year;
    });
    
    return matchingEvents;
}   