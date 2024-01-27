import { Link } from "react-router-dom"
import logo from "../../assets/budgetBuddyLogo.png";
import "./Navbar.css";
function Navbar({user, userSignOut}){
    return(
    <nav>
        <div className="logo">
            <img src={logo} alt="budgetBuddyLogo" />
            <h1>BudgetBuddy</h1>
        </div>
        <div className="navItems">
            <Link to="/" style={{padding: "8px"}}>Home</Link>
            <Link to="/about" style={{padding: "8px"}}>About</Link>
            <Link to="/budget" style={{padding: "8px"}}>Budget</Link>
            
            {user ? 
            (<button onClick={userSignOut}>Sign out</button>)
             : (<Link to ="/login" style={{padding: "8px"}}>Login</Link>)
             }
        </div>
    </nav>
    )
}

export default Navbar;