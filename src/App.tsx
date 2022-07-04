import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";

export const AuthContext: any = createContext({});

export const App = () => {
  const [loggedInUser, setLoggedInUser] = useState();
  
  // Logged in user
  console.log("Logged In User: ", loggedInUser);
  return (
    <>
      <AuthContext.Provider value={{loggedInUser, setLoggedInUser}}>
        <Routes>
          <Route path="*" element={<LandingPage />}/>
          <Route path="calendar" element={<MainPage />}/> 
        </Routes>
      </AuthContext.Provider>
    </>
  )
};