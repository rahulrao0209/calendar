import React from 'react';
import type { MainProps } from '../../types/types';
import { Calendar } from '../Calendar/Calendar';
import { Drawer } from '../Drawer/Drawer';
import "./Main.scss";

export const Main = ({ data, drawerClosed, setData }: MainProps) => {

    return (
        <section className={drawerClosed ? 'main--closed' : 'main'}>
            <Drawer data={data} drawerClosed={drawerClosed} setData={setData}/>
            <Calendar data={data} setData={setData}/>
        </section>
    )
}