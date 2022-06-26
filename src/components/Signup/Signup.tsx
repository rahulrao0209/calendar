import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signupNewUser } from "../../firebase/firebase";
import type { User, UserForDatabase } from "../../types/types";

const defaultUser = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const Signup = () => {

  const [user, setUser] = useState<User>(defaultUser);

  const handleSignup = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    	event.preventDefault();

      const email = user.email;
      const password = user.password;
      const confirmPassword = user.confirmPassword;
      let errorMessage = '';

      if(!email || !password || email === '' || password === '') errorMessage = 'Enter a valid email or password to signup!';

      if(password !== confirmPassword) errorMessage = 'Passwords being entered do not match. Please check again';

      const UserForDB: UserForDatabase = createUserForDatabase(user);

      signupNewUser(user, errorMessage);
      setUser(defaultUser);
  }

  const createUserForDatabase  = (user: User) => {
    return {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    }
  }

  const updateUser = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    setUser({...user, [event.target.name]: event.target.value});
  }

  return (
    <>
      <form className="signup-form">
        <div>
          <input name="firstname" type="text" value={user.firstname} onChange={updateUser} />
          <label htmlFor="firstname">Firstname</label>
        </div>

        <div>
          <input name="lastname" type="text" value={user.lastname} onChange={updateUser} />
          <label htmlFor="lastname">Lastname</label>
        </div>

        <div>
          <input name="email" type="email" value={user.email} onChange={updateUser} />
          <label htmlFor="email">Email</label>
        </div>

        <div>
          <input name="password" type="password" value={user.password} onChange={updateUser} />
          <label htmlFor="password">Password</label>
        </div>

        <div>
          <input name="confirmPassword" type="password" value={user.confirmPassword} onChange={updateUser} />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>

        <button onClick={handleSignup}>Signup</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </>
  )
}