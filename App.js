import React from 'react'
// import Home from './pages/Home'
import Login from "./pages/Login"
// import RegisterNew from "./pages/RegisterNew"
// import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
<>
{/* <BrowserRouter>
<Routes>
  <Route to="/home" element={<Home />} />
  <Route to="/login" element={<Login />} />
  <Route to="/register" element={<RegisterNew />} />
</Routes>
</BrowserRouter> */}
<Login/>
{/* <RegisterNew /> */}
</>
  )
}

export default App