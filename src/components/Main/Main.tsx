import React from 'react';
import type { Data } from '../../types/interfaces';
import { Calendar } from '../Calendar/Calendar';
import { Drawer } from '../Drawer/Drawer';
import "./Main.scss";

export const Main: (props: Data) => JSX.Element = ({ data }) => {
    return (
        <section className="main">
            <Drawer />
            <Calendar data={data}/>
        </section>
    )
}