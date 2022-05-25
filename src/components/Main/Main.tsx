import React from 'react';
import type { MainProps } from '../../types/types';
import { Calendar } from '../Calendar/Calendar';
import { Drawer } from '../Drawer/Drawer';
import "./Main.scss";

/*
    TODO: Create more specific types for main props and drawer props and create a separate type for Calendar props
*/
export const Main = ({ data, state, eventList, openedEvent, drawerClosed, eventColors, displayEventsByColor, setDisplayEventsByColor, setData, setShowModal, setEventDay, setOpenedEvent }: MainProps) => {

    return (
        <section className={drawerClosed ? 'main--closed' : 'main'}>
            <Drawer
              data={data}
              eventColors={eventColors}
              displayEventsByColor={displayEventsByColor}
              setDisplayEventsByColor={setDisplayEventsByColor}
              setData={setData}
              setShowModal={setShowModal}
              setEventDay={setEventDay} 
            />
            <Calendar
              data={data}
              eventList={eventList}
              state={state} setData={setData}
              openedEvent={openedEvent}
              eventColors={eventColors}
              displayEventsByColor={displayEventsByColor}
              setDisplayEventsByColor={setDisplayEventsByColor}
              setShowModal={setShowModal}
              setEventDay={setEventDay}
              setOpenedEvent={setOpenedEvent}
            />
        </section>
    )
}