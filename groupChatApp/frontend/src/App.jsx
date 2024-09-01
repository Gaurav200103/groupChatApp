import { Route, Routes } from "react-router-dom"
import Singup from "./components/Singup"
import Login from "./components/Login"
import Chat from "./components/Chat"


function App() {
  
  return(
    <Routes>
      <Route path="/register" element={<Singup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Chat />} />
    </Routes>
  )
}

export default App
