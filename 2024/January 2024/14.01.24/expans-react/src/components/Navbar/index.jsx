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
            <Link to="/" style={{padding: "5px"}}>Home</Link>
            <Link to="/about" style={{padding: "5px"}}>About</Link>
            <Link to="/budget" style={{padding: "5px"}}>Budget</Link>
            <Link to ="/login" style={{padding: "5px"}}>Login</Link>
            {user ? <button onClick={userSignOut}>Sign out</button> : null}
        </div>
    </nav>
    )
}

export default Navbar;