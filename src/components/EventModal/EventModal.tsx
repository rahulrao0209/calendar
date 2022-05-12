import React from "react";
import "./EventModal.scss";

export const EventModal = () => {
    return (
        <form className="event-modal">
            <div className="event-modal__header">
              <div className="event-modal__menu-btn">
                  <span></span>
              </div>
              <div className="event-modal__close-btn">
                <span></span>
              </div>
              <div></div>
            </div>
        </form>
    )
}