import type { EventData } from "../types/types";

export const deleteEvent = (events: EventData[] | undefined, event: EventData) => {
    const newEventList = events?.filter(item => !(item.title === event.title));
    return newEventList;
}