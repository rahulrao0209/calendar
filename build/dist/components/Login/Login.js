import React, {useState, useContext} from "../../../_snowpack/pkg/react.js";
import {useNavigate, Link} from "../../../_snowpack/pkg/react-router-dom.js";
import {AuthContext} from "../../App.js";
import {signInUser} from "../../firebase/firebase.js";
const defaultUser = {
  email: "",
  password: ""
};
export const Login = () => {
  const [user, setUser] = useState(defaultUser);
  const [error, setError] = useState("");
  const {setLoggedInUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = user?.email;
    const password = user?.password;
    let errorMessage = "";
    if (!email || !password || email === "" || password === "") {
      errorMessage = "Enter a valid email or password to login!";
      setError(errorMessage);
    }
    const signedInUser = await signInUser(user, errorMessage);
    setUser(defaultUser);
    if (!signedInUser)
      return;
    setLoggedInUser(signedInUser);
    navigate("/calendar");
  };
  const updateUser = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
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
  }, "Password")), /* @__PURE__ */ React.createElement("button", {
    onClick: handleLogin
  }, "Login"), /* @__PURE__ */ React.createElement("p", null, "Don't have an account? ", /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Signup")), /* @__PURE__ */ React.createElement("p", {
    className: "error"
  }, error)));
};
