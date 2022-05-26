import React from "../../../_snowpack/pkg/react.js";
import {Hamburger} from "../Hamburger/Hamburger.js";
import {Nav} from "../Nav/Nav.js";
import "./Header.css.proxy.js";
export const Header = ({nav, hamburger}) => {
  const {drawerClosed, setDrawerClosed} = hamburger;
  const {data, setData} = nav;
  return /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ React.createElement(Hamburger, {
    drawerClosed,
    setDrawerClosed
  }), /* @__PURE__ */ React.createElement("span", null, "Calendar"), /* @__PURE__ */ React.createElement(Nav, {
    data,
    setData
  }));
};
