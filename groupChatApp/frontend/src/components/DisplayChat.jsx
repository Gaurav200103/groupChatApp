import React from 'react'

function DisplayChat({item}) {

  const handleSubmit = (e) => {

    dispatch(sendMessage({ message: input }));

  };

  
  return (
    <div>
      {
        item == null ? <p>Select group first for chat</p> : <> 
          <div className={`w-full flex justify-end p-4 ${item?.isAdmin ? "flex" :"hidden"}`}><button className='bg-blue-600 text-white font-bold p-2 rounded-md '>Add User</button></div>
          <div className='flex w-full p-4'>
            <input type="text" className='w-full p-2' onChange={(event) => setInput(event.target.value)} />
            <button className='px-4' onClick={handleSubmit}>Send</button>
          </div>
        </>
      }
    </div>
  )
}

export default DisplayChat
