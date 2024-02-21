import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from './pages/Auth/Auth';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
