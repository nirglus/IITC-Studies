import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from './pages/Auth/Auth';
import UserAcc from "./pages/UserAcc/UserAcc";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar"
import Cart from "./pages/Cart/Cart";
import Dashboard from "./pages/Dashboard/Dashboard";
import SingleItem from "./components/SingleItem/SingleItem";
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:id" element={<UserAcc />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleItem />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
