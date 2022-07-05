import React from "../../../_snowpack/pkg/react.js";
import {NavLink} from "../../../_snowpack/pkg/react-router-dom.js";
import "./LandingHeader.css.proxy.js";
export const LandingHeader = () => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "landing-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "landing__logo"
  }, "Calendar"), /* @__PURE__ */ React.createElement("div", {
    className: "landing__links"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/login",
    className: ({isActive}) => isActive ? "active-link" : "inactive-link"
  }, "Login"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/",
    className: ({isActive}) => isActive ? "active-link" : "inactive-link"
  }, "Signup"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/about",
    className: ({isActive}) => isActive ? "active-link" : "inactive-link"
  }, "About")));
};
