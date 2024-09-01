import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createGroupButton, getGroups, receiveMessages, sendMessage } from '../../storage/chatSlice';
import io from "socket.io-client";
import Group from './Group';
import DisplayChat from './DisplayChat';

const socket = io('http://localhost:3000');

function Chat() {
  const [message, setMessage] = useState([]);
  const [item, setItem] = useState(null);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const state = useSelector(state => state.chatReducer);

  console.log(state);
  useEffect(() => {
    socket.on('message', (msg) => {
      console.log(msg);
    });
    console.log("useeffect")
  }, [dispatch]);

  useEffect(()=>{
    dispatch(getGroups());
  }, [])

  
  return (
    <>
      
      <div className={`w-full min-h-[100vh] absolute bg-gray-500 flex justify-center items-center ${state.createGroup ? "flex": "hidden"}`} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
        <Group />
      </div>
      <p className='text-center font-bold text-2xl py-4'>Chat App</p>

      <div className='w-full h-full flex'>

        <div className='w-1/5 bg-gray-500 min-h-[100vh] p-2'>
          <button className='bg-green-700 text-white text-2xl p-2 rounded-lg w-full' onClick={() => dispatch(createGroupButton())}>Create Group</button>

          <ul>
            {
              state.myGroups?.groups?.map(item =>{
                return <li onClick={()=> setItem(item)} className='bg-blue-600 text-white font-bold p-2 rounded-lg my-2'>{item.dataValues.groupName}</li>
              })
            }
          </ul>
        </div>

        <div className='w-4/5 bg-green-400 min-h-[100vh]'>
          {/* <div id='displayMessage'>
            {
              message.map(item => {
                console.log(item);
                return <p>{item.text}</p>;
              })
            }
          </div> */}
          <DisplayChat item={item} />

          
        </div>


      </div>
    </>
  );
}

export default Chat
