import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import type { monthData, EventModalType } from "./types/types";
import { Main } from "./components/Main/Main";
import { EventModal } from "./components/EventModal/EventModal";
import { getDayData } from "./utils/getDayData";

export const App = () => {
    const [data, setData] = useState<monthData[]>([]);
    const [drawerClosed, setDrawerClosed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [eventForDay, setEventForDay] = useState<monthData>(getDayData());
    
    // Create the props
    const nav = { data, setData }
    const hamburger = { drawerClosed, setDrawerClosed }

    return (
        <div>
           <Header nav={nav} hamburger={hamburger} />
           <Main data={data} drawerClosed={drawerClosed} setData={setData} setShowModal={setShowModal} setEventForDay={setEventForDay} />
           <EventModal show={showModal} eventForDay={eventForDay} setShowModal={setShowModal} />
        </div>
    )
};