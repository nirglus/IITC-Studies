import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './pages/Auth/Auth';
import Expenses from './pages/Expenses'
import Navbar from './components/Navbar';


function App() {
  const [name, setName] = useState();
  const [user , setUser] = useState(null);

  useEffect(() =>{
    setUser({email: 'nirg@gmail.com', name});
  },[]);

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/budget" element={<Expenses user={user}/>}/>
        <Route path="/login" element={<Auth setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
