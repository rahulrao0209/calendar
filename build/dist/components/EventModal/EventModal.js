import React from "../../../_snowpack/pkg/react.js";
import {deleteEvent} from "../../utils/deleteEvent.js";
import {MdOutlineEvent, MdDeleteOutline} from "../../../_snowpack/pkg/react-icons/md.js";
import {BsPencil} from "../../../_snowpack/pkg/react-icons/bs.js";
import {VscBookmark} from "../../../_snowpack/pkg/react-icons/vsc.js";
import {AiOutlineClockCircle} from "../../../_snowpack/pkg/react-icons/ai.js";
import {IoIosCheckmark} from "../../../_snowpack/pkg/react-icons/io.js";
import "./EventModal.css.proxy.js";
export const EventModal = ({show, state, openedEvent, eventList, dispatch, setShowModal, setEventList, setOpenedEvent}) => {
  const className = show ? "event-modal show-modal" : "event-modal hide-modal";
  const checkedIcon = /* @__PURE__ */ React.createElement(IoIosCheckmark, {
    className: "event-modal__checked-icon"
  });
  const handleTitleChange = (event) => {
    dispatch({type: "update-title", data: event.currentTarget.value});
  };
  const handleDescChange = (event) => {
    dispatch({type: "update-desc", data: event.currentTarget.value});
  };
  const handleColorSelection = (event) => {
    console.log("Selected Color: ", event.target.dataset.color);
    dispatch({type: "update-color", data: event.target.dataset.color});
  };
  const resetModalData = () => {
    dispatch({type: "update-title", data: ""});
    dispatch({type: "update-desc", data: ""});
    dispatch({type: "update-color", data: "#e2a601"});
  };
  const closeModal = () => {
    setShowModal(false);
    setOpenedEvent(void 0);
    resetModalData();
  };
  const handleDeleteEvent = () => {
    console.log("Deleting Event: ", openedEvent?.title);
    if (openedEvent?.title) {
      setEventList(deleteEvent(eventList, openedEvent));
      closeModal();
      resetModalData();
    }
  };
  const saveEvent = () => {
    setShowModal(false);
    if (openedEvent?.title) {
      const newEventList = deleteEvent(eventList, openedEvent);
      if (newEventList) {
        setEventList([...newEventList, state]);
        resetModalData();
        return;
      }
    }
    if (eventList && state.title) {
      setEventList([...eventList, state]);
    } else if (state.title) {
      setEventList([state]);
    }
    resetModalData();
  };
  return /* @__PURE__ */ React.createElement("form", {
    className
  }, /* @__PURE__ */ React.createElement("div", {
    className: "event-modal__header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "event-modal__menu-btn"
  }, /* @__PURE__ */ React.createElement("span", null)), /* @__PURE__ */ React.createElement("div", {
    className: "event-modal__close-btn",
    onClick: closeModal
  }, /* @__PURE__ */ React.createElement("span", null)), /* @__PURE__ */ React.createElement("div", {
    className: "event-modal__delete-btn",
    onClick: handleDeleteEvent
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(MdDeleteOutline, {
    className: "delete-btn"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "event-modal__form"
  }, /* @__PURE__ */ React.createElement(MdOutlineEvent, {
    className: "event-modal__icon"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "event-modal__field"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    placeholder: "Add Title",
    defaultValue: openedEvent?.title,
    onChange: handleTitleChange
  })), /* @__PURE__ */ React.createElement(BsPencil, {
    className: "event-modal__icon"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "event-modal__field"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "description",
    placeholder: "Add Description",
    defaultValue: openedEvent?.desc,
    onChange: handleDescChange
  })), /* @__PURE__ */ React.createElement(AiOutlineClockCircle, {
    className: "event-modal__icon"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "event-modal__field"
  }, /* @__PURE__ */ React.createElement("span", null, state.date.monthName, " ", state.date.day, ", ", state.date.year)), /* @__PURE__ */ React.createElement(VscBookmark, {
    className: "event-modal__icon"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "event__colors",
    onClick: handleColorSelection
  }, /* @__PURE__ */ React.createElement("span", {
    "data-color": "#e2a601"
  }, " ", state.color === "#e2a601" ? checkedIcon : null, " "), /* @__PURE__ */ React.createElement("span", {
    "data-color": "#dd5e89"
  }, " ", state.color === "#dd5e89" ? checkedIcon : null, " "), /* @__PURE__ */ React.createElement("span", {
    "data-color": "#4389a2"
  }, " ", state.color === "#4389a2" ? checkedIcon : null, " "), /* @__PURE__ */ React.createElement("span", {
    "data-color": "#fe8c00"
  }, " ", state.color === "#fe8c00" ? checkedIcon : null, " "), /* @__PURE__ */ React.createElement("span", {
    "data-color": "#12d8fa"
  }, " ", state.color === "#12d8fa" ? checkedIcon : null, " ")), /* @__PURE__ */ React.createElement("button", {
    onClick: saveEvent
  }, "Save")));
};
