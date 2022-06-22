import React from "react";

export const Login = () => {
  
  const handleLogin = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    event.preventDefault(); 
  }

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

        <button onClick={handleLogin}>Login</button>
      </form>
    </>
  )
}
