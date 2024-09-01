import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import io from "socket.io-client";

const socket = io('http://localhost:3000');

const lastMessageid = localStorage.getItem("id") || "0";
const messages= JSON.parse(localStorage.getItem("message")) || [];

export const sendMessage = createAsyncThunk("/sendMessage", 
  async ({message}) =>{
    // const res = await axios.post("http://localhost:3000/sendChat", {chat:message, receiverId: lastMessageid}, {headers:{
    //   Authorization:localStorage.getItem("token")
    // }});

    // localStorage.setItem("id", (Number (localStorage.getItem("id")) + 1));
    
    console.log(message);
    socket.emit('sendMessage',{id: lastMessageid, message});
    
    return res;
  }
)

export const receiveMessages = createAsyncThunk("/receiveMessage", 
  async () =>{
    const res = await axios.get(`http://localhost:3000/getChats?lastMessageId=${(Number (localStorage.getItem("id")) -1)}`, {headers:{
      Authorization:localStorage.getItem("token")
    }});
    // console.log(res);

    // if(messages[messages.length -1].id != (Number (localStorage.getItem("id")) -1)){
    //   messages.push({message: res.data.messages.message, id: res.data.messages.receiverId});
    // }
    

    // localStorage.setItem('message', JSON.stringify(messages));

    socket.on('message', (msg) => {
      console.log(msg);
    });
    
    return res.data.messages;
  }
)

export const createGroup = createAsyncThunk("createGroup", async ({groupName})=>{
  const res = await axios.post(`http://localhost:3000/createGroup`,{name: groupName}, {headers:{
    Authorization:localStorage.getItem("token")
  }});
  console.log(res);
  return res.data;
})

export const getGroups = createAsyncThunk("getGroups", async ()=>{
  const res = await axios.get(`http://localhost:3000/getGroups`, {headers:{
    Authorization:localStorage.getItem("token")
  }});
  console.log(res);
  return res.data;
})

const chatSlice = createSlice({
  name:"chat",
  initialState:{messages:[], createGroup: false, myGroups: []},
  reducers:{
    createGroupButton:(state)=>{
      state.createGroup = !state.createGroup;
    }
  },
  extraReducers(builder){
    builder.addCase(sendMessage.fulfilled, (state, action)=>{
      
    }),
    builder.addCase(receiveMessages.fulfilled, (state, action)=>{
      state.messages = JSON.parse(localStorage.getItem("message")) ||[];
    }),
    builder.addCase(createGroup.fulfilled, (state, action)=>{
      console.log(action.massage);
    }),
    builder.addCase(getGroups.fulfilled, (state, action)=>{
      state.myGroups = action.payload;
    })
  }
})

export default chatSlice.reducer;
export const {createGroupButton} = chatSlice.actions;