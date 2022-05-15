import React from "react";
import type { EventModalType } from "../../types/types";
import { MdOutlineEvent } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import "./EventModal.scss";

export const EventModal:  ({ show, eventForDay, setShowModal }: EventModalType) => JSX.Element | null = ({ show, eventForDay, setShowModal }: EventModalType) => {
  const closeModal = () => { setShowModal(false); }

  const handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log("Title: ", event.currentTarget.value);
  }

  const handleDescChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log("Desc: ", event.currentTarget.value);
  }
  
  return show ? (
    <form className="event-modal">
      
      <div className="event-modal__header">
        <div className="event-modal__menu-btn">
          <span></span>
        </div>
       <div className="event-modal__close-btn" onClick={closeModal}>
          <span></span>
       </div>
     </div>

     <div className="event-modal__form">
         <MdOutlineEvent className="event-modal__icon" />
         <div className="event-modal__field">
           <input type="text" name="title" placeholder="Add Title" onChange={handleTitleChange}/>
         </div>

         <BsPencil className="event-modal__icon" />
         <div className="event-modal__field">
           <input type="text" name="description" placeholder="Add Description" onChange={handleDescChange}/>
         </div>
         
         <AiOutlineClockCircle className="event-modal__icon" />
         <div className="event-modal__field">
           <span>{eventForDay.monthName} {eventForDay.day}, {eventForDay.year}</span>
         </div>

         <button onClick={closeModal}>
           Save
         </button>
     </div>
    
    </form>
    ) : null 
}