import React from "../../../_snowpack/pkg/react.js";
import "./Hamburger.css.proxy.js";
export const Hamburger = ({setDrawerClosed}) => {
  const handleHamburger = () => {
    setDrawerClosed((drawerClosed) => !drawerClosed);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "menu",
    onClick: handleHamburger
  }, /* @__PURE__ */ React.createElement("div", {
    className: "menu__hamburger"
  }));
};
