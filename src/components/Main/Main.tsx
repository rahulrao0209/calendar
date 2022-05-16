import React from 'react';
import type { MainProps } from '../../types/types';
import { Calendar } from '../Calendar/Calendar';
import { Drawer } from '../Drawer/Drawer';
import "./Main.scss";

export const Main = ({ data, state, eventList, drawerClosed, setData, setShowModal, setEventDay }: MainProps) => {

    return (
        <section className={drawerClosed ? 'main--closed' : 'main'}>
            <Drawer data={data} eventList={eventList} state={state} drawerClosed={drawerClosed} setData={setData} setShowModal={setShowModal} setEventDay={setEventDay} />
            <Calendar data={data} eventList={eventList} state={state} setData={setData} setShowModal={setShowModal} setEventDay={setEventDay} />
        </section>
    )
}