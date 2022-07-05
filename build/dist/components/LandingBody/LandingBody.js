import React from "../../../_snowpack/pkg/react.js";
import {Routes, Route} from "../../../_snowpack/pkg/react-router-dom.js";
import {Signup} from "../Signup/Signup.js";
import {Login} from "../Login/Login.js";
import {About} from "../About/About.js";
import calendarImage from "../../../images/calendar.jpg.proxy.js";
import "./LandingBody.css.proxy.js";
export const LandingBody = () => {
  return /* @__PURE__ */ React.createElement("section", {
    className: "landing-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "landing-body__image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: calendarImage,
    alt: "calendar"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "landing-body__form"
  }, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    index: true,
    element: /* @__PURE__ */ React.createElement(Signup, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/login",
    element: /* @__PURE__ */ React.createElement(Login, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/about",
    element: /* @__PURE__ */ React.createElement(About, null)
  }))));
};
