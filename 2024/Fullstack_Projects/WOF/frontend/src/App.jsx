import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from './pages/Auth/Auth';
import UserAcc from "./pages/UserAcc/UserAcc";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar"
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:id" element={<UserAcc />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
