import { Link } from "react-router-dom"
import logo from "../../assets/budgetBuddyLogo.png";
import "./Navbar.css";
import { ThemeContext } from "../../../context/Theme";
import { useContext } from "react";
function Navbar({user, userSignOut}){
    const {isDarkMode, selectedTheme, toggleTheme} = useContext(ThemeContext);
    console.log(isDarkMode);
    return(
    <nav style={{...selectedTheme}}>
        <div className="logo">
            <img src={logo} alt="budgetBuddyLogo" />
            <h1>BudgetBuddy</h1>
        </div>
        <div className="navItems">
            <Link to="/" style={{padding: "8px"}}>Home</Link>
            <Link to="/about" style={{padding: "8px"}}>About</Link>
            <Link to="/budget" style={{padding: "8px"}}>Budget</Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
            
            {user ? 
            (<button onClick={userSignOut}>Sign out</button>)
             : (<Link to ="/login" style={{padding: "8px"}}>Login</Link>)
             }
        </div>
    </nav>
    )
}

export default Navbar;