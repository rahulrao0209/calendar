import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "../Signup/Signup";
import { Login } from "../Login/Login";
import { About } from "../About/About";
import calendarImage from "../../../public/images/calendar.jpg";
import "./LandingBody.scss";

export const LandingBody = () => {
    return (
      <section className="landing-body">
        <div className="landing-body__image">
           <img src={calendarImage} alt="calendar"/>
        </div>
        <div className="landing-body__form">
          <Routes>
            <Route index element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </div>
      </section>
    )
}