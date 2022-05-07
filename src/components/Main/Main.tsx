import React from 'react';
import type { Data } from '../../types/interfaces';
import { Calendar } from '../Calendar/Calendar';
import { Drawer } from '../Drawer/Drawer';
import "./Main.scss";

export const Main = ({ data }: Data) => {
    return (
        <section className="main">
            <Drawer data={data}/>
            <Calendar data={data}/>
        </section>
    )
}