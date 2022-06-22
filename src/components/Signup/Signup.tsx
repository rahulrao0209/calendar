import React from "react";

export const Signup = () => {

  const handleSignup = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    	event.preventDefault();
  }

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

        <button onClick={handleSignup}>Signup</button>
      </form>
    </>
  )
}