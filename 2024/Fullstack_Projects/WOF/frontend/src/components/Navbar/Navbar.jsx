import React from 'react'
import { UserContext } from '../../context/User'
import { useContext ,useState} from 'react'
import { Link } from 'react-router-dom';
import { isModerator } from '../../config/roles';
import "./Navbar.scss"

function Navbar() {
  const {user, signOut, token} = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <nav>
      <div className="logo">
        <img src="https://i.pinimg.com/originals/ae/d6/b5/aed6b55143050c6762ed415f1cde83c5.png" alt="wof-logo" width={50} />
        <h1>World of Formula</h1>
      </div>
      <div className={`navItems ${isOpen ? 'active' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          {user && <li><Link to={`/cart/${user.id}`}>Cart</Link></li>}
          {user && <li><Link to={`/account/${user.id}`}>My Account</Link></li>}
          {isModerator(user) && <li><Link to="/dashboard">Dashboard</Link></li>}
          {user ? (
            <li><button onClick={signOut}><i className="bi bi-box-arrow-left"></i> Sign out, <b>{user.fullName}</b></button></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
