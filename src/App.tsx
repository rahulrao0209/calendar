import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import type { monthData, EventModalType } from "./types/types";
import { Main } from "./components/Main/Main";
import { EventModal } from "./components/EventModal/EventModal";

export const App = () => {
    const [data, setData] = useState<monthData[]>([]);
    const [drawerClosed, setDrawerClosed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    
    // Create the props
    const nav = { data, setData }
    const hamburger = { drawerClosed, setDrawerClosed }

    return (
        <div>
           <Header nav={nav} hamburger={hamburger} />
           <Main data={data} drawerClosed={drawerClosed} setData={setData} setShowModal={setShowModal}/>
           <EventModal show={showModal} date={"test"} setShowModal={setShowModal} />
        </div>
    )
};