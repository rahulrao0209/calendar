import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { UserContext } from "./context/UserContext";

export const App = () => {
  return (
    <>
      <UserContext.Provider value={""}>
        <Routes>
          <Route path="*" element={<LandingPage />}/>
          <Route path="calendar" element={<MainPage />}/>  
        </Routes>
      </UserContext.Provider>
    </>
  )
};