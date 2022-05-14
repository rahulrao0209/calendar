import React from "react";
import type { EventModalType } from "../../types/types";
import { MdOutlineEvent } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
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
     </div>

     <div className="event-modal__form">
         <MdOutlineEvent className="event-modal__icon" />
         <div className="event-modal__field">
           <input type="text" name="title" placeholder="Add Title"/>
         </div>

         <BsPencil className="event-modal__icon" />
         <div className="event-modal__field">
           <input type="text" name="description" placeholder="Add Description"/>
         </div>
         
         <AiOutlineClockCircle className="event-modal__icon" />
         <div className="event-modal__field">
           <span>May 14, 2022</span>
         </div>

         <button onClick={(e) => e.preventDefault()}>
           Save
         </button>
     </div>
    
    </form>
    ) : null 
}