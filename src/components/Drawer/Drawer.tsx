import React from "react";
import type { MainProps } from "src/types/types";
import { getDayData } from "../../utils/getDayData";
import { CalendarSmall } from "../CalendarMini/CalendarMini";
import "./Drawer.scss";

export const Drawer = ({ data, state, setData, setShowModal, setEventDay }: MainProps) => {

    const handleModal = () => { 
        setEventDay(getDayData());
        setShowModal(true); 
    }
    
    return (
        <div className="drawer">
            <button className="drawer__create-btn" onClick={handleModal}>
                Create
            </button>
            <CalendarSmall data={data} state={state} setData={setData} setShowModal={setShowModal} setEventDay={setEventDay}/>
        </div>
    )
}