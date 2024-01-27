import { Link } from "react-router-dom"

function Navbar({user, userSignOut}){
    return(
    <nav>
            <Link to="/" style={{padding: "5px"}}>Home</Link>
            <Link to="/about" style={{padding: "5px"}}>About</Link>
            <Link to="/budget" style={{padding: "5px"}}>Budget</Link>
            <Link to ="/login" style={{padding: "5px"}}>Login</Link>
            {user ? <button onClick={userSignOut}>Sign out</button> : null}
    </nav>
    )
}

export default Navbar;