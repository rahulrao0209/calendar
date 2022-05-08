import React from "react";
import type { MainProps } from "src/types/types";
import { CalendarSmall } from "../CalendarMini/CalendarMini";
import "./Drawer.scss";

export const Drawer = ({ data }: MainProps) => {

    return (
        <div className="drawer">
            <button className="drawer__create-btn">
                Create
            </button>
            <CalendarSmall data={data}/>
        </div>
    )
}