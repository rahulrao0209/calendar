import React from "react";

export const Login = () => {
  return (
    <>
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
    </>
  )
}
