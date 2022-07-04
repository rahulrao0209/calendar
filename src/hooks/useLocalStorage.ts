import React, { useEffect } from "react";
import type { EventData } from "../types/types";

export const useLocalStorage = (eventList: EventData[] | undefined, setEventList: React.Dispatch<React.SetStateAction<EventData[] | undefined>>) => {
        
    // Retrieve events from the local storage
    useEffect(() => {
        const savedEvents = localStorage.getItem('eventlist');
            if(typeof(savedEvents) === 'string' && savedEvents != undefined && savedEvents != 'undefined') {
                setEventList(JSON.parse(savedEvents));
            }
    }, [])
      
    // Save events to local storage
    useEffect(() => {
        if(eventList) { localStorage.setItem('eventlist', JSON.stringify(eventList)); }
    }, [eventList])
}