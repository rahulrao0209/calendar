import React from "react";
import type { DrawerProps } from "src/types/types";
import { getDayData } from "../../utils/getDayData";
import { CalendarMini } from "../CalendarMini/CalendarMini";
import "./Drawer.scss";

const colorMap = new Map([
    ["#e2a601", "Yellow"],
    ["#dd5e89", "Pink"],
    ["#4389a2", "Lake Blue"],
    ["#fe8c00", "Orange"],
    ["#12d8fa", "Sky Blue"],
])

export const Drawer = ({ data, eventColors, setData, setShowModal, setEventDay }: DrawerProps) => {

    const handleModal = () => { 
        setEventDay(getDayData());
        setShowModal(true); 
    }

    const createColorFilterComponent = (color: string) => {

        return (
            <div key={color}>
              <span data-color={color} style={{color: `${color}`}}></span> <span>{ colorMap.get(color) } </span>
            </div>
        );
    }
    
    return (
        <div className="drawer">
            <button className="drawer__create-btn" onClick={handleModal}>
                Create
            </button>
            <CalendarMini data={data} setData={setData}/>

            <div className="drawer__event-filters">
                <h3>Events</h3>
                <div className="drawer__filters">
                    { eventColors.map((item) => {
                        return createColorFilterComponent(item);
                    })}
                </div>
            </div>
        </div>
    )
}