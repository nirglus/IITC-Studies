import React from 'react'
import { UserContext } from '../../context/User'
import { useContext ,useEffect} from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const {user, signOut, token} = useContext(UserContext);
  useEffect(() =>{
    console.log("Nav",user);
    console.log("Nav",token);
  },[user,token])
  return (
    <nav>
        <div className="logo">
            <h1>World of Formula</h1>
        </div>
        <div className="navItems">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            {user ? <Link to={`/account/${user.id}`}>My Account</Link> : null}     
            {user ? 
            (<button onClick={signOut}>Sign out,<span> <b>{user?.fullName}</b></span></button>)
             : (<Link to ="/login">Login</Link>)
             }
        </div>
    </nav>
  )
}

export default Navbar
