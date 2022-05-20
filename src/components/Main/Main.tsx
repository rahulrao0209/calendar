import React from 'react';
import type { MainProps } from '../../types/types';
import { Calendar } from '../Calendar/Calendar';
import { Drawer } from '../Drawer/Drawer';
import "./Main.scss";

export const Main = ({ data, state, eventList, openedEvent, drawerClosed, setData, setShowModal, setEventDay, setOpenedEvent }: MainProps) => {

    return (
        <section className={drawerClosed ? 'main--closed' : 'main'}>
            <Drawer data={data} setData={setData} setShowModal={setShowModal} setEventDay={setEventDay} />
            <Calendar
              data={data}
              eventList={eventList}
              state={state} setData={setData}
              openedEvent={openedEvent}
              setShowModal={setShowModal}
              setEventDay={setEventDay}
              setOpenedEvent={setOpenedEvent}
            />
        </section>
    )
}