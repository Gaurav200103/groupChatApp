import React, { useState } from 'react'
import { loginUser, singUpUser } from '../../storage/authSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const handleForm = ()=>{
    event.preventDefault();

    dispatch(loginUser(user));
  }
  
  return (
    <div className='flex justify-center items-center'>
      <form action='' className="shadow-xl w-full max-w-[500px] p-4 rounded-md" onSubmit={handleForm}>
        <p className='text-center font-bold'>LOG IN</p>
        <label htmlFor="email">Email : </label>
        <input type="text" name='email' required className='block p-2 w-full' placeholder='Enter your email...' onChange={(e)=> setUser({...user, email : event.target.value})} />
        <label htmlFor="password">Password : </label>
        <input type="text" name='password' required className='block p-2 w-full' placeholder='Enter your password...' onChange={(e)=> setUser({...user, password : event.target.value})} />
        <button className='w-full bg-green-500 text-white p-2 my-2' type='submit'>LogIn</button>
        <Link to={"/register"}>Create account</Link>
      </form>
    </div>
  )
}

export default Login
