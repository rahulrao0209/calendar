import React from 'react';
import type { MainProps } from '../../types/types';
import { Calendar } from '../Calendar/Calendar';
import { Drawer } from '../Drawer/Drawer';
import "./Main.scss";

export const Main = ({ data, drawerClosed, setData, setShowModal }: MainProps) => {

    return (
        <section className={drawerClosed ? 'main--closed' : 'main'}>
            <Drawer data={data} drawerClosed={drawerClosed} setData={setData} setShowModal={setShowModal} />
            <Calendar data={data} setData={setData} setShowModal={setShowModal}/>
        </section>
    )
}