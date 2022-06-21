import React from "react";

export const Login = () => {
  return (
    <>
      <form>
        <div>
          <input name="email" type="email" />
          <label htmlFor="email">Email</label>
        </div>

        <div>
          <input name="password" type="password" />
          <label htmlFor="password">Password</label>
        </div>
      </form>
    </>
  )
}
