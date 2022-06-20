import React from "react";

export const Signup = () => {
  return (
    <>
      <form>
        <div>
          <label>Firstname</label>
          <input type="text" placeholder="First Name"/>
        </div>

        <div>
          <label>Lastname</label>
          <input type="text" placeholder="Last Name"/>
        </div>

        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter Email"/>
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter Password"/>
        </div>

        <div>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password"/>
        </div>
      </form>
    </>
  )
}