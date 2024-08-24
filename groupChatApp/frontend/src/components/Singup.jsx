import React from 'react'

function Singup() {
  return (
    <div className='flex justify-center items-center'>
      <form action='' className="shadow-xl w-full max-w-[500px] p-4 rounded-md">
        <p>SING UP</p>
        <label htmlFor="name">Name : </label>
        <input type="text" name='name' required className='block p-2' placeholder='Enter your name...' />
        <label htmlFor="email">Email : </label>
        <input type="text" name='email' required className='block p-2' placeholder='Enter your email...' />
        <label htmlFor="phone">Phone No : </label>
        <input type="text" name='phone' required className='block p-2' placeholder='Enter your phone no...' />
        <label htmlFor="password">Password : </label>
        <input type="text" name='password' required className='block p-2' placeholder='Enter your password...' />
        <button type='submit'>SingUp</button>
      </form>
    </div>
  )
}

export default Singup
