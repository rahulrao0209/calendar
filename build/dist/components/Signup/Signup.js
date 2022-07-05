import React, {useState} from "../../../_snowpack/pkg/react.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
import {signupNewUser} from "../../firebase/firebase.js";
const defaultUser = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: ""
};
export const Signup = () => {
  const [user, setUser] = useState(defaultUser);
  const [error, setError] = useState("");
  const handleSignup = (event) => {
    event.preventDefault();
    const email = user.email;
    const password = user.password;
    const confirmPassword = user.confirmPassword;
    let errorMessage = "";
    if (!email || !password || email === "" || password === "") {
      errorMessage = "Enter a valid email or password to signup!";
      setError(errorMessage);
    }
    if (password !== confirmPassword) {
      errorMessage = "Passwords being entered do not match. Please check again";
      setError(errorMessage);
    }
    signupNewUser(user, errorMessage);
    setUser(defaultUser);
  };
  const updateUser = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", {
    className: "signup-form"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    name: "firstname",
    type: "text",
    value: user.firstname,
    onChange: updateUser
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "firstname"
  }, "Firstname")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    name: "lastname",
    type: "text",
    value: user.lastname,
    onChange: updateUser
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "lastname"
  }, "Lastname")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    name: "email",
    type: "email",
    value: user.email,
    onChange: updateUser
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email"
  }, "Email")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    name: "password",
    type: "password",
    value: user.password,
    onChange: updateUser
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password"
  }, "Password")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    name: "confirmPassword",
    type: "password",
    value: user.confirmPassword,
    onChange: updateUser
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "confirmPassword"
  }, "Confirm Password")), /* @__PURE__ */ React.createElement("button", {
    onClick: handleSignup
  }, "Signup"), /* @__PURE__ */ React.createElement("p", null, "Already have an account? ", /* @__PURE__ */ React.createElement(Link, {
    to: "/login"
  }, "Login")), /* @__PURE__ */ React.createElement("p", {
    className: "error"
  }, error)));
};
