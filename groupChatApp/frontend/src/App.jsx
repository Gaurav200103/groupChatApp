import { Route, Routes } from "react-router-dom"
import Singup from "./components/Singup"
import Login from "./components/Login"


function App() {
  
  return(
    <Routes>
      <Route path="/register" element={<Singup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
