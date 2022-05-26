import React, {useEffect} from "../../../_snowpack/pkg/react.js";
import {getDayData} from "../../utils/getDayData.js";
import {CalendarMini} from "../CalendarMini/CalendarMini.js";
import "./Drawer.css.proxy.js";
export const colorMap = new Map([
  ["#e2a601", "Yellow"],
  ["#dd5e89", "Pink"],
  ["#4389a2", "Green"],
  ["#fe8c00", "Orange"],
  ["#12d8fa", "Blue"]
]);
export const Drawer = ({data, eventColors, displayEventsByColor, setDisplayEventsByColor, setData, setShowModal, setEventDay}) => {
  const {yellow, pink, green, orange, blue} = displayEventsByColor;
  const handleModal = () => {
    setEventDay(getDayData());
    setShowModal(true);
  };
  const handleClick = (event) => {
    const color = event.target.dataset.color;
    const colorName = colorMap.get(color)?.toLowerCase();
    switch (colorName) {
      case "yellow":
        setDisplayEventsByColor({type: "update-yellow", data: !yellow});
        return;
      case "pink":
        setDisplayEventsByColor({type: "update-pink", data: !pink});
        return;
      case "green":
        setDisplayEventsByColor({type: "update-green", data: !green});
        return;
      case "orange":
        setDisplayEventsByColor({type: "update-orange", data: !orange});
        return;
      case "blue":
        setDisplayEventsByColor({type: "update-blue", data: !blue});
        return;
      default:
        console.log("No color selected");
    }
  };
  const createColorFilterComponent = (color) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: color
    }, /* @__PURE__ */ React.createElement("span", {
      "data-color": color,
      style: {color: `${color}`},
      className: "filter-box add-background-color"
    }), " ", /* @__PURE__ */ React.createElement("span", null, colorMap.get(color), " "));
  };
  useEffect(() => {
    const updateFilters = () => {
      const allFilters = document.querySelectorAll(".filter-box");
      console.log("allFilters: ", allFilters);
      allFilters.forEach((filter) => {
        const color = filter.attributes.getNamedItem("data-color")?.value;
        if (color) {
          const colorName = colorMap.get(color)?.toLowerCase();
          displayEventsByColor[colorName] ? filter.classList.add("add-background-color") : filter.classList.remove("add-background-color");
        }
      });
    };
    updateFilters();
  }, [displayEventsByColor]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "drawer"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "drawer__create-btn",
    onClick: handleModal
  }, "Create"), /* @__PURE__ */ React.createElement(CalendarMini, {
    data,
    setData
  }), /* @__PURE__ */ React.createElement("div", {
    className: "drawer__event-filters"
  }, /* @__PURE__ */ React.createElement("h3", null, "Events"), /* @__PURE__ */ React.createElement("div", {
    className: "drawer__filters",
    onClick: handleClick
  }, eventColors.map((item) => {
    return createColorFilterComponent(item);
  }))));
};
