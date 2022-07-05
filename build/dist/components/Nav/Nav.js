import React, {useEffect, useState, useContext} from "../../../_snowpack/pkg/react.js";
import {useNavigate} from "../../../_snowpack/pkg/react-router-dom.js";
import {IoCaretBack, IoCaretForward} from "../../../_snowpack/pkg/react-icons/io5.js";
import {getMonthData} from "../../utils/getMonthData.js";
import {AuthContext} from "../../App.js";
import "./Nav.css.proxy.js";
export const Nav = ({data, setData}) => {
  const [month, setMonth] = useState(new Date().getMonth());
  const {loggedInUser, setLoggedInUser} = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    setData(getMonthData(month));
  }, [month]);
  useEffect(() => {
    if (!loggedInUser)
      navigate("/");
  }, [loggedInUser]);
  const handleNext = () => {
    console.log("SET MONTH");
    setMonth(month + 1);
  };
  const handlePrev = () => {
    console.log("SET MONTH");
    setMonth(month - 1);
  };
  const setToday = () => {
    console.log("SET TODAY");
    setMonth(new Date().getMonth());
  };
  const handleLogout = () => {
    setLoggedInUser(void 0);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "nav"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "nav__left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "nav__today",
    onClick: setToday
  }, "Today"), /* @__PURE__ */ React.createElement("div", {
    className: "nav__controls"
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
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "nav__month"
  }, data[data.length - 1]?.monthName, " ", data[data.length - 1]?.year)), /* @__PURE__ */ React.createElement("nav", {
    className: "nav__right"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "nav__logout",
    onClick: handleLogout
  }, "Logout ", loggedInUser?.firstname)));
};
