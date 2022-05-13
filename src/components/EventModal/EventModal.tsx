import React from "react";
import type { EventModalType } from "../../types/types";
import "./EventModal.scss";

export const EventModal:  ({ show, date, setShowModal }: EventModalType) => JSX.Element | null = ({ show, date, setShowModal }: EventModalType) => {
  
  const handleModal = () => { setShowModal(false); }
  
  return show ? (
    <form className="event-modal">
      <div className="event-modal__header">
        <div className="event-modal__menu-btn">
          <span></span>
        </div>
       <div className="event-modal__close-btn" onClick={handleModal}>
          <span></span>
        </div>
        <div></div>
      </div>
    </form>
    ) : null 
}