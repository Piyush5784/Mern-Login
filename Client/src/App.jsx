import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./Components/Login"
import Register from "./Components/Register";
import Homepage from "./Components/Homepage";
function App() {

  return (
    <>
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route index path="/register" element={<Register />} />
          <Route index path="/home" element={<Homepage />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
