import React from "react";
import type { EventModalType, EventData, Action } from "../../types/types";
import { MdOutlineEvent, MdDeleteOutline } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import "./EventModal.scss";

export const EventModal = ({ show, state, openedEvent, eventList, eventDay, dispatch, setShowModal, setEventList, setOpenedEvent }: EventModalType) => {
 
  console.log("STATE: ", state);

  const handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log("Title: ", event.currentTarget.value);
    dispatch({ type: 'update-title', data: event.currentTarget.value });   
  }

  const handleDescChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log("Desc: ", event.currentTarget.value);
    dispatch({ type: 'update-desc', data: event.currentTarget.value });
  }

  const closeModal = () => { 
    setShowModal(false); 
    setOpenedEvent(undefined);
  }

  const saveEvent = () => {
    setShowModal(false);
    if(eventList && state.title) {
      setEventList([...eventList, state]);
    } else if(state.title){
      // Check if the event being added atleast has a title
      setEventList([state]);
    }
    // Clear the title and description after the event is saved
    dispatch({ type: 'update-title', data: '' });
    dispatch({ type: 'update-desc', data: ''});  
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
       <div className="event-modal__delete-btn" onClick={closeModal}>
          <span><MdDeleteOutline className="delete-btn"/></span>
       </div>
     </div>

     <div className="event-modal__form">
         <MdOutlineEvent className="event-modal__icon" />
         <div className="event-modal__field">
           <input type="text" name="title" placeholder="Add Title" defaultValue={openedEvent?.title} onChange={handleTitleChange}/>
         </div>

         <BsPencil className="event-modal__icon" />
         <div className="event-modal__field">
           <input type="text" name="description" placeholder="Add Description" defaultValue={openedEvent?.desc} onChange={handleDescChange}/>
         </div>
         
         <AiOutlineClockCircle className="event-modal__icon" />
         <div className="event-modal__field">
           <span>{eventDay.monthName} {eventDay.day}, {eventDay.year}</span>
         </div>

         <button onClick={saveEvent}>
           Save
         </button>
     </div>
    
    </form>
    ) : null 
}