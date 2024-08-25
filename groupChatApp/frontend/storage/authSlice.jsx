import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const singUpUser = createAsyncThunk("singupUser", async (user)=>{
  const res = await axios.post("http://localhost:3000/register", user);
  console.log(res);
  return res.data;
})

export const loginUser = createAsyncThunk("loginUser", async (user)=>{
  const res = await axios.post("http://localhost:3000/login", user);
  console.log(res);
  return res.data;
})

const UserSlice = createSlice({
  name:"auth",
  initialState: [],
  reducers:{
    
  },
  extraReducers(builder){
    builder.addCase(singUpUser.fulfilled, (state, action)=>{
      console.log("user added successfully");
    }),
    builder.addCase(loginUser.fulfilled, (state, action)=>{
      if(action.payload.login){
        localStorage.setItem("token", action.payload.token);
      }
    })
  }
})


export default UserSlice.reducer;
