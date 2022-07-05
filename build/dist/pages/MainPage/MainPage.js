import React, {useState, useEffect, useReducer} from "../../../_snowpack/pkg/react.js";
import {useLocalStorage} from "../../hooks/useLocalStorage.js";
import {useViewport} from "../../hooks/useViewport.js";
import {colorReducer} from "../../utils/colorReducer.js";
import {eventReducer} from "../../utils/eventReducer.js";
import {getDayData} from "../../utils/getDayData.js";
import {EventModal} from "../../components/EventModal/EventModal.js";
import {Header} from "../../components/Header/Header.js";
import {Main} from "../../components/Main/Main.js";
const initialEventState = {
  title: "",
  desc: "",
  date: getDayData(),
  color: "#e2a601"
};
const initialEventColors = {
  yellow: true,
  pink: true,
  green: true,
  orange: true,
  blue: true
};
export const MainPage = () => {
  const [data, setData] = useState([]);
  const [drawerClosed, setDrawerClosed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [eventDay, setEventDay] = useState(getDayData());
  const [eventList, setEventList] = useState();
  const [state, dispatch] = useReducer(eventReducer, initialEventState);
  const [openedEvent, setOpenedEvent] = useState();
  const [eventColors, setEventColors] = useState([]);
  const [displayEventsByColor, setDisplayEventsByColor] = useReducer(colorReducer, initialEventColors);
  const viewportWidth = useViewport();
  const nav = {data, setData};
  const hamburger = {drawerClosed, setDrawerClosed};
  useEffect(() => {
    dispatch({type: "update-date", data: eventDay});
  }, [eventDay]);
  useEffect(() => {
    setDrawerClosed(viewportWidth > 760 ? false : true);
  }, [viewportWidth]);
  useEffect(() => {
    if (openedEvent?.title) {
      dispatch({type: "update-title", data: openedEvent.title});
    }
    if (openedEvent?.date) {
      dispatch({type: "update-desc", data: openedEvent.desc});
    }
    if (openedEvent?.date) {
      dispatch({type: "update-date", data: openedEvent.date});
    }
    if (openedEvent?.color) {
      dispatch({type: "update-color", data: openedEvent.color});
    }
  }, [openedEvent]);
  useEffect(() => {
    const colors = new Set(eventList?.map((item) => item.color));
    setEventColors([...colors]);
  }, [eventList]);
  useLocalStorage(eventList, setEventList);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    nav,
    hamburger
  }), /* @__PURE__ */ React.createElement(Main, {
    data,
    state,
    eventList,
    openedEvent,
    drawerClosed,
    eventColors,
    displayEventsByColor,
    setDisplayEventsByColor,
    setData,
    setShowModal,
    setEventDay,
    setOpenedEvent
  }), /* @__PURE__ */ React.createElement(EventModal, {
    show: showModal,
    eventDay,
    eventList,
    setShowModal,
    state,
    openedEvent,
    dispatch,
    setEventList,
    setOpenedEvent
  }));
};
