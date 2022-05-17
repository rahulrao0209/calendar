import React, { useReducer, useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import type { monthData, EventData, Action } from "./types/types";
import { Main } from "./components/Main/Main";
import { EventModal } from "./components/EventModal/EventModal";
import { getDayData } from "./utils/getDayData";
import { eventReducer } from "./utils/eventReducer";

const initialEventState: EventData = {
    title: "",
    desc: "",
    date: getDayData()
};

export const App = () => {
    const [data, setData] = useState<monthData[]>([]);
    const [drawerClosed, setDrawerClosed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [eventDay, setEventDay] = useState<monthData>(getDayData());
    const [eventList, setEventList] = useState<EventData[]>();
    const [state, dispatch] = useReducer(eventReducer, initialEventState);
    
    // Create the props
    const nav = { data, setData }
    const hamburger = { drawerClosed, setDrawerClosed }

    useEffect(() => {
      dispatch({ type: 'update-date', data: eventDay });
    }, [eventDay])

    return (
        <div>
           <Header nav={nav} hamburger={hamburger} />
           <Main data={data} state={state} eventList={eventList} drawerClosed={drawerClosed} setData={setData} setShowModal={setShowModal} setEventDay={setEventDay} />
           <EventModal show={showModal} eventDay={eventDay} eventList={eventList} setShowModal={setShowModal} state={state} dispatch={dispatch} setEventList={setEventList}/>
        </div>
    )
};