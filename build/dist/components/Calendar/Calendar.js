import React from "../../../_snowpack/pkg/react.js";
import {isToday} from "../../utils/isToday.js";
import {findMatchingEvents} from "../../utils/findMatchingEvents.js";
import {colorMap} from "../Drawer/Drawer.js";
import "./Calendar.css.proxy.js";
export const todayStyle = {
  color: "#fff",
  backgroundColor: "#e6a770"
};
export const Calendar = ({data, eventList, displayEventsByColor, setEventDay, setShowModal, setOpenedEvent}) => {
  const handleClick = (event) => {
    if (typeof event.currentTarget.dataset.value === "string") {
      setEventDay(JSON.parse(event.currentTarget.dataset.value));
      setShowModal(true);
    }
  };
  const handleEventClick = (event) => {
    event.stopPropagation();
    if (typeof event.currentTarget.dataset.value === "string") {
      setOpenedEvent(JSON.parse(event.currentTarget.dataset.value));
    }
    setShowModal(true);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "calendar"
  }, data.map((item, index) => {
    let isCurrentDayToday = isToday(item);
    let matchingEvents = findMatchingEvents(eventList, item);
    return /* @__PURE__ */ React.createElement("div", {
      className: "calendar__cell",
      key: index,
      onClick: handleClick,
      "data-value": JSON.stringify(item)
    }, /* @__PURE__ */ React.createElement("span", {
      className: "calendar__day"
    }, item.dayName), /* @__PURE__ */ React.createElement("span", {
      className: "calendar__month",
      style: isCurrentDayToday ? todayStyle : {}
    }, item.day), /* @__PURE__ */ React.createElement("div", {
      className: "calendar__event"
    }, matchingEvents?.map((event, index2) => displayEventsByColor[colorMap.get(event.color).toLowerCase()] ? /* @__PURE__ */ React.createElement("div", {
      key: index2,
      "data-value": JSON.stringify(event),
      onClick: handleEventClick,
      style: {backgroundColor: event.color}
    }, event.title) : null)));
  }));
};
