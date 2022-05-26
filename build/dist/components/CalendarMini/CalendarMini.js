import React, {useState, useEffect, useRef} from "../../../_snowpack/pkg/react.js";
import {IoCaretBack, IoCaretForward} from "../../../_snowpack/pkg/react-icons/io5.js";
import {isToday} from "../../utils/isToday.js";
import {getMonthData} from "../../utils/getMonthData.js";
import {todayStyle} from "../Calendar/Calendar.js";
import "./CalendarMini.css.proxy.js";
export const CalendarMini = ({data, setData}) => {
  const [miniData, setMiniData] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth());
  const clickedDay = useRef(null);
  const handleNext = () => {
    console.log("SET MONTH");
    setMonth(month + 1);
  };
  const handlePrev = () => {
    console.log("SET MONTH");
    setMonth(month - 1);
  };
  const handleDayClick = (event) => {
    setData(miniData);
    const currentNode = event.currentTarget.parentElement;
    if (currentNode != clickedDay.current) {
      clickedDay.current?.classList.remove("calendar-mini__cell--clicked");
      clickedDay.current = currentNode;
      clickedDay.current?.classList.add("calendar-mini__cell--clicked");
    } else if (currentNode === clickedDay.current) {
      clickedDay.current?.classList.remove("calendar-mini__cell--clicked");
    }
  };
  useEffect(() => {
    setMiniData(getMonthData(month));
    clickedDay.current?.classList.remove("calendar-mini__cell--clicked");
    clickedDay.current = null;
  }, [month]);
  useEffect(() => {
    setMiniData(data);
  }, [data]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "calendar-mini"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "calendar-mini__nav"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "calendar-mini__month"
  }, miniData[miniData.length - 1]?.monthName, " ", miniData[miniData.length - 1]?.year), /* @__PURE__ */ React.createElement("div", {
    className: "calendar-mini__nav-controls"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "nav__controls--previous",
    onClick: handlePrev
  }, /* @__PURE__ */ React.createElement(IoCaretBack, {
    className: "icon--prev"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "nav__controls--next",
    onClick: handleNext
  }, /* @__PURE__ */ React.createElement(IoCaretForward, {
    className: "icon--next"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "calendar-mini__week"
  }, /* @__PURE__ */ React.createElement("span", null, "S"), /* @__PURE__ */ React.createElement("span", null, "M"), /* @__PURE__ */ React.createElement("span", null, "T"), /* @__PURE__ */ React.createElement("span", null, "W"), /* @__PURE__ */ React.createElement("span", null, "T"), /* @__PURE__ */ React.createElement("span", null, "F"), /* @__PURE__ */ React.createElement("span", null, "S")), /* @__PURE__ */ React.createElement("div", {
    className: "calendar-mini__calendar"
  }, miniData.map((item, index) => {
    let isCurrentDayToday = isToday(item);
    return /* @__PURE__ */ React.createElement("div", {
      className: "calendar-mini__cell",
      key: index,
      style: isCurrentDayToday ? todayStyle : {}
    }, /* @__PURE__ */ React.createElement("span", {
      className: "calendar-mini__day",
      onClick: handleDayClick
    }, item.day));
  })));
};
