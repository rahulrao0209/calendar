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
    const [eventColors, setEventColors] = useState<string[]>([]);
    const viewportWidth = useViewport();

    // console.log("COLORS IN USE: ", eventColors);

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

    // Update the state if an existing event is opened
    useEffect(() => {
      if(openedEvent?.title) {
        dispatch({ type: 'update-title', data: openedEvent.title });
      }

      if(openedEvent?.date) {
        dispatch({ type: 'update-desc', data: openedEvent.desc })
      }

      if(openedEvent?.date) {
        dispatch({ type: 'update-date', data: openedEvent.date });
      }

      if(openedEvent?.color) {
        dispatch({ type: 'update-color', data: openedEvent.color });
      }
    }, [openedEvent])

    // Update our list of colors whenever the eventlist changes
    useEffect(() => {
      const colors = new Set(eventList?.map((item) => item.color));
      setEventColors([...colors]);
    }, [eventList])

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
             eventColors={eventColors}
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