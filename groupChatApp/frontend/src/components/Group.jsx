import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createGroup, createGroupButton } from '../../storage/chatSlice';

function Group() {
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState("");

  

  const handleForm = ()=>{
    event.preventDefault();

    dispatch(createGroupButton());
    dispatch(createGroup({groupName}));
  }
  
  return (
    <div>
      <form action='' className="shadow-xl w-full max-w-[600px] p-4 rounded-md bg-white" onSubmit={handleForm}>
        <p className='text-center font-bold'>Create Group</p>
        <label htmlFor="name">Group Name : </label>
        <input type="text" name='name' required className='block p-2 w-full' placeholder='Enter your group name...' onChange={()=> setGroupName(event.target.value)} />
        <button className='w-full bg-green-500 text-white p-2 my-2' type='submit'>Create</button>
      </form>
    </div>
  )
}

export default Group
