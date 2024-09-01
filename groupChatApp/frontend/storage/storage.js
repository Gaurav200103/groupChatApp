import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import chatReducer from "./chatSlice"


const storage = configureStore({
  reducer:{
    authReducer,
    chatReducer
  }
})

export default storage;