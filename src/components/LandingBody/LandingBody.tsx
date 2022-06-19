import React from "react";
import "./LandingBody.scss";

export const LandingBody = () => {
    return (
      <section className="landing-body">
        <div className="landing-body__image">
           {/* Add an image here */}
        </div>
        <div className="landing-body__form">
          <form>
            <div>
            <label>Email</label>
            <input type="email" placeholder="Enter Email"/>
            </div>

            <div>
            <label>Password</label>
            <input type="password" placeholder="Enter Password"/>
            </div>
          </form>
        </div>
      </section>
    )
}