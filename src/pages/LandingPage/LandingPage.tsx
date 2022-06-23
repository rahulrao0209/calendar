import React from "react";
import { LandingBody } from "../../components/LandingBody/LandingBody";
import { LandingHeader } from "../../components/LandingHeader/LandingHeader";
import { LandingFooter } from "../../components/LandingFooter/LandingFooter";
import "./LandingPage.scss";

export const LandingPage = () => {
  return (
    <>
      <LandingHeader />
      <LandingBody />
      <LandingFooter />
    </>
  ) 
}