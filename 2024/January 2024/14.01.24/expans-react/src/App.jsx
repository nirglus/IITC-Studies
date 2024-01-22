import { useState, useEffect } from 'react'
import { onAuthStateChanged ,signOut, getAuth } from 'firebase/auth';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './pages/Auth/Auth';
import { auth } from './config/firebaseConfig';
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
      <Navbar/>
      {user ? <button onClick={userSignOut}>Sign out</button> : null}
      <Routes>
        <Route path="/budget" element={<Expenses user={user}/>}/>
        <Route path="/login" element={<Auth setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
