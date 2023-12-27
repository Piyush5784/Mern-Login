import React from "react";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from "./Components/Register";
import Home from "./Components/Home";

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />}></Route>
          <Route index path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
