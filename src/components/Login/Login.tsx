import React, { useState } from "react";
import { signInUser } from "../../firebase/firebase";
import { LoggedInUser } from "../../types/types";

const defaultUser = {
  email: '',
  password: ''
}

export const Login = () => {
  
  const [user, setUser] = useState(defaultUser);

  const handleLogin = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    event.preventDefault(); 

    const email = user?.email;
    const password = user?.password;
    let errorMessage = '';

    if(!email || !password || email === '' || password === '') errorMessage = 'Enter a valid email or password to signup!';

    signInUser(user, errorMessage);
    setUser(defaultUser);
  }

  const updateUser = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    setUser({...user, [event.target.name]: event.target.value});
  }

  return (
    <>
      <form>
        <div>
          <input name="email" type="email" value={user.email} onChange={updateUser} />
          <label htmlFor="email">Email</label>
        </div>

        <div>
          <input name="password" type="password" value={user.password} onChange={updateUser} />
          <label htmlFor="password">Password</label>
        </div>

        <button onClick={handleLogin}>Login</button>
      </form>
    </>
  )
}
