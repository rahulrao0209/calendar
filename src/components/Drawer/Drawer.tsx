import React from "react";
import type { DrawerProps } from "src/types/types";
import { getDayData } from "../../utils/getDayData";
import { CalendarMini } from "../CalendarMini/CalendarMini";
import "./Drawer.scss";

export const Drawer = ({ data, setData, setShowModal, setEventDay }: DrawerProps) => {

    const handleModal = () => { 
        setEventDay(getDayData());
        setShowModal(true); 
    }
    
    return (
        <div className="drawer">
            <button className="drawer__create-btn" onClick={handleModal}>
                Create
            </button>
            <CalendarMini data={data} setData={setData}/>
        </div>
    )
}