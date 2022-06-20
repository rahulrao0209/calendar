import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "../Signup/Signup";
import { Login } from "../Login/Login";
import "./LandingBody.scss";

export const LandingBody = () => {
    return (
      <section className="landing-body">
        <div className="landing-body__image">
           {/* Add an image here */}
        </div>
        <div className="landing-body__form">
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="*" element={<Signup />}/>
          </Routes>
        </div>
      </section>
    )
}