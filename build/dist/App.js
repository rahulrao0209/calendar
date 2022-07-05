import React, {useState, createContext} from "../_snowpack/pkg/react.js";
import {Routes, Route} from "../_snowpack/pkg/react-router-dom.js";
import {MainPage} from "./pages/MainPage/MainPage.js";
import {LandingPage} from "./pages/LandingPage/LandingPage.js";
export const AuthContext = createContext({});
export const App = () => {
  const [loggedInUser, setLoggedInUser] = useState();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AuthContext.Provider, {
    value: {loggedInUser, setLoggedInUser}
  }, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "*",
    element: /* @__PURE__ */ React.createElement(LandingPage, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "calendar",
    element: /* @__PURE__ */ React.createElement(MainPage, null)
  }))));
};
