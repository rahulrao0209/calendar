import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../App";
import { signInUser } from "../../firebase/firebase";

const defaultUser = {
  email: '',
  password: ''
}

export const Login = () => {
  
  const [user, setUser] = useState(defaultUser);
  const [error, setError] = useState('');
  const { setLoggedInUser } =  useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (event: React.BaseSyntheticEvent<MouseEvent>) => {
    event.preventDefault(); 

    const email = user?.email;
    const password = user?.password;
    let errorMessage = '';

    if(!email || !password || email === '' || password === '') {errorMessage = 'Enter a valid email or password to login!'; setError(errorMessage)}

    const signedInUser = await signInUser(user, errorMessage);
    setUser(defaultUser);

    if(!signedInUser) return;

    // Set the context data to reflect the current signed in user
    setLoggedInUser(signedInUser);

    // Navigate to the calendar page if login is successful
    navigate("/calendar");
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
        <p>Don't have an account? <Link to="/">Signup</Link></p>
        <p className="error">{error}</p>
      </form>
    </>
  )
}
