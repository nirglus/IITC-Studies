import { useState, useEffect } from 'react'
import { onAuthStateChanged ,signOut, getAuth } from 'firebase/auth';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from './config/firebaseConfig';
import Home from './pages/Home/Home';
import About from './pages/About';
import Auth from './pages/Auth/Auth';
import Expenses from './pages/Expenses'
import Navbar from './components/Navbar';


function App() {
  const [name, setName] = useState("");
  const [user , setUser] = useState(null);

  useEffect(() =>{ 
    onAuthStateChanged(auth, (userCardential) =>{
        if (userCardential){
            setUser({ email: userCardential.email, id: userCardential.uid});
            console.log(user);
        }
    })}, [])

    const userAuth = getAuth();

    const userSignOut = () => {
      signOut(userAuth)
        .then(() => {
          console.log("Signed out");
        })
        .catch((error) => {
          console.error("Error signing out: ", error);
        })
        .finally(() => {
          setUser(null); 
        });
    };
  return (
    <>
    <BrowserRouter>
      <Navbar user={user} userSignOut={userSignOut}/>
      <Routes>
        <Route path="/budget" element={<Expenses user={user}/>}/>
        <Route path="/login" element={<Auth setUser={setUser} user={user} />}/>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
