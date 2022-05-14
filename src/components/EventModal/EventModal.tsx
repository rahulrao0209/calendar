import React from "react";
import type { EventModalType } from "../../types/types";
import { MdOutlineEvent } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
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
         <div className="event-modal__field">
           <MdOutlineEvent className="event-modal__icon" />
           <input type="text" name="title" placeholder="Add Title"/>
         </div>

         <div className="event-modal__field">
           <BsPencil className="event-modal__icon" />
           <input type="text" name="description" placeholder="Add Description"/>
         </div>
     </div>
    
    </form>
    ) : null 
}