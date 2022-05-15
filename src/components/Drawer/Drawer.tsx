import React from "react";
import type { MainProps } from "src/types/types";
import { getDayData } from "../../utils/getDayData";
import { CalendarSmall } from "../CalendarMini/CalendarMini";
import "./Drawer.scss";

export const Drawer = ({ data, setData, setShowModal, setEventForDay }: MainProps) => {

    const handleModal = () => { 
        setEventForDay(getDayData());
        setShowModal(true); 
    }
    
    return (
        <div className="drawer">
            <button className="drawer__create-btn" onClick={handleModal}>
                Create
            </button>
            <CalendarSmall data={data} setData={setData} setShowModal={setShowModal} setEventForDay={setEventForDay}/>
        </div>
    )
}