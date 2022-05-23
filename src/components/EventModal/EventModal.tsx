import React, { useState } from "react";
import type { EventModalType } from "../../types/types";
import { deleteEvent } from "../../utils/deleteEvent";
import { MdOutlineEvent, MdDeleteOutline } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { VscBookmark } from "react-icons/vsc";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoIosCheckmark } from "react-icons/io";

import "./EventModal.scss";

export const EventModal = ({ show, state, openedEvent, eventList, dispatch, setShowModal, setEventList, setOpenedEvent }: EventModalType) => {
 
  const checkedIcon = <IoIosCheckmark className="event-modal__checked-icon" />;
  
  const handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log("Title: ", event.currentTarget.value);
    dispatch({ type: 'update-title', data: event.currentTarget.value });   
  }

  const handleDescChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log("Desc: ", event.currentTarget.value);
    dispatch({ type: 'update-desc', data: event.currentTarget.value });
  }

  const handleColorSelection = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    console.log("Selected Color: ", event.target.dataset.color);
    dispatch({ type: 'update-color', data: event.target.dataset.color});
  }

  const resetModalData = () => {
    // Clear the title and description and set color to default after the event is saved
    dispatch({ type: 'update-title', data: '' });
    dispatch({ type: 'update-desc', data: ''});
    dispatch({ type: 'update-color', data: '#e2a601'});  
  }

  const closeModal = () => { 
    setShowModal(false); 
    setOpenedEvent(undefined);
    resetModalData();
  }

  const handleDeleteEvent = () => {
    console.log("Deleting Event: ", openedEvent?.title);

    // If an existing is event is open, delete it
    if(openedEvent?.title) {
      setEventList(deleteEvent(eventList, openedEvent));
      closeModal();
      resetModalData();
    }
  }

  const saveEvent = () => {
    setShowModal(false);

    // If an existing event is opened
    if(openedEvent?.title) {
      const newEventList = deleteEvent(eventList, openedEvent);
      if(newEventList) {
        setEventList([...newEventList, state]);
        resetModalData();
        return;
      }
    }

    if(eventList && state.title) {
      setEventList([...eventList, state]);
    } else if(state.title){
      // Check if the event being added atleast has a title
      setEventList([state]);
    }

    resetModalData();   
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
       <div className="event-modal__delete-btn" onClick={handleDeleteEvent}>
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
           <span>{state.date.monthName} {state.date.day}, {state.date.year}</span>
         </div>

         <VscBookmark className="event-modal__icon" />
         <div className="event__colors" onClick={handleColorSelection}>

          <span data-color="#e2a601"> { state.color === "#e2a601" ? checkedIcon : null } </span>
          <span data-color="#dd5e89"> { state.color === "#dd5e89" ? checkedIcon : null } </span>
          <span data-color="#4389a2"> { state.color === "#4389a2" ? checkedIcon : null } </span>
          <span data-color="#fe8c00"> { state.color === "#fe8c00" ? checkedIcon : null } </span>
          <span data-color="#12d8fa"> { state.color === "#12d8fa" ? checkedIcon : null } </span>
         </div>

         <button onClick={saveEvent}>
           Save
         </button>
     </div>
    
    </form>
    ) : null 
}