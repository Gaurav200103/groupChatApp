import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"


const storage = configureStore({
  reducer:{
    authReducer
  }
})

export default storage;