import React, { useState } from 'react'
import { singUpUser } from '../../storage/authSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Singup() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const handleForm = ()=>{
    event.preventDefault();

    dispatch(singUpUser(user));
  }
  
  return (
    <div className='flex justify-center items-center'>
      <form action='' className="shadow-xl w-full max-w-[500px] p-4 rounded-md" onSubmit={handleForm}>
        <p className='text-center font-bold'>SING UP</p>
        <label htmlFor="name">Name : </label>
        <input type="text" name='name' required className='block p-2 w-full' placeholder='Enter your name...' onChange={(e)=> setUser({...user, name : event.target.value})} />
        <label htmlFor="email">Email : </label>
        <input type="text" name='email' required className='block p-2 w-full' placeholder='Enter your email...' onChange={(e)=> setUser({...user, email : event.target.value})} />
        <label htmlFor="phone">Phone No : </label>
        <input type="text" name='phone' required className='block p-2 w-full' placeholder='Enter your phone no...' onChange={(e)=> setUser({...user, phone_no : event.target.value})} />
        <label htmlFor="password">Password : </label>
        <input type="text" name='password' required className='block p-2 w-full' placeholder='Enter your password...' onChange={(e)=> setUser({...user, password : event.target.value})} />
        <button className='w-full bg-green-500 text-white p-2 my-2' type='submit'>SingUp</button>
        <Link to={"/login"}>Have account</Link>
      </form>
    </div>
  )
}

export default Singup
