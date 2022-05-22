import React, { useReducer, useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import type { monthData, EventData } from "./types/types";
import { Main } from "./components/Main/Main";
import { EventModal } from "./components/EventModal/EventModal";
import { getDayData } from "./utils/getDayData";
import { eventReducer } from "./utils/eventReducer";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useViewport } from "./hooks/useViewport";

const initialEventState: EventData = {
    title: "",
    desc: "",
    date: getDayData(),
    color: "#e2a601"
};

export const App = () => {
    const [data, setData] = useState<monthData[]>([]);
    const [drawerClosed, setDrawerClosed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [eventDay, setEventDay] = useState<monthData>(getDayData());
    const [eventList, setEventList] = useState<EventData[]>();
    const [state, dispatch] = useReducer(eventReducer, initialEventState);
    const [openedEvent, setOpenedEvent] = useState<EventData>();
    const viewportWidth = useViewport();

    // Create the props
    const nav = { data, setData }
    const hamburger = { drawerClosed, setDrawerClosed }

    useEffect(() => {
      dispatch({ type: 'update-date', data: eventDay });
    }, [eventDay])

    // Drawer should be open or close depending on the viewport
    useEffect(() => {
      setDrawerClosed(viewportWidth > 760 ? false: true);
    }, [viewportWidth])

    // Save and retrieve events from the local storage
    useLocalStorage(eventList, setEventList);

    return (
        <div>
           <Header nav={nav} hamburger={hamburger} />
           <Main
             data={data}
             state={state}
             eventList={eventList}
             openedEvent={openedEvent}
             drawerClosed={drawerClosed}
             setData={setData}
             setShowModal={setShowModal}
             setEventDay={setEventDay} 
             setOpenedEvent={setOpenedEvent}
           />
           <EventModal
             show={showModal}
             eventDay={eventDay}
             eventList={eventList}
             setShowModal={setShowModal}
             state={state}
             openedEvent={openedEvent}
             dispatch={dispatch}
             setEventList={setEventList}
             setOpenedEvent={setOpenedEvent}
            />
        </div>
    )
};