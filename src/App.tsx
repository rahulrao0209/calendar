import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<LandingPage />}/>
        <Route path="calendar" element={<MainPage />}/>  
      </Routes>
    </>
  )
};