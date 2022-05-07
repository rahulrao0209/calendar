import React from "react";
import { CalendarSmall } from "../CalendarSmall/CalendarSmall";
import "./Drawer.scss";

export const Drawer = () =>{
    return (
        <div className="drawer">
            <button className="drawer__create-btn">
                Create
            </button>
            <CalendarSmall />
        </div>
    )
}