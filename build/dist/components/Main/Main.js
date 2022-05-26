import React from "../../../_snowpack/pkg/react.js";
import {Calendar} from "../Calendar/Calendar.js";
import {Drawer} from "../Drawer/Drawer.js";
import "./Main.css.proxy.js";
export const Main = ({data, eventList, openedEvent, drawerClosed, eventColors, displayEventsByColor, setDisplayEventsByColor, setData, setShowModal, setEventDay, setOpenedEvent}) => {
  return /* @__PURE__ */ React.createElement("section", {
    className: drawerClosed ? "main--closed" : "main"
  }, /* @__PURE__ */ React.createElement(Drawer, {
    data,
    eventColors,
    displayEventsByColor,
    setDisplayEventsByColor,
    setData,
    setShowModal,
    setEventDay
  }), /* @__PURE__ */ React.createElement(Calendar, {
    data,
    eventList,
    openedEvent,
    displayEventsByColor,
    setShowModal,
    setEventDay,
    setOpenedEvent
  }));
};
