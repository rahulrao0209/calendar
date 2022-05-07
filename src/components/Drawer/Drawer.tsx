import React from "react";
import type { Data } from "src/types/interfaces";
import { CalendarSmall } from "../CalendarMini/CalendarMini";
import "./Drawer.scss";

export const Drawer = ({ data }: Data) => {
    return (
        <div className="drawer">
            <button className="drawer__create-btn">
                Create
            </button>
            <CalendarSmall data={data}/>
        </div>
    )
}