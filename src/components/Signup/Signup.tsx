import React from "react";

export const Signup = () => {
  return (
    <>
      <form>
        <div>
          <input name="firstname" type="text" />
          <label htmlFor="firstname">Firstname</label>
        </div>

        <div>
          <input name="lastname" type="text" />
          <label htmlFor="lastname">Lastname</label>
        </div>

        <div>
          <input name="email" type="email" />
          <label htmlFor="email">Email</label>
        </div>

        <div>
          <input name="password" type="password" />
          <label htmlFor="password">Password</label>
        </div>

        <div>
          <input name="confirm password" type="password" />
          <label htmlFor="confirm password">Confirm Password</label>
        </div>

        <button>Signup</button>
      </form>
    </>
  )
}