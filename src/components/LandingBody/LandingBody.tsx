import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "../Signup/Signup";
import { Login } from "../Login/Login";
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
          </Routes>
        </div>
        <footer>
          Copyright &copy; 2022
        </footer>
      </section>
    )
}