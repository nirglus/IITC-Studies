import { Link } from "react-router-dom"

function Navbar(){
    return(
    <nav>
            <Link to="/" style={{padding: "5px"}}>Home</Link>
            <Link to="/about" style={{padding: "5px"}}>About</Link>
            <Link to="/budget" style={{padding: "5px"}}>Budget</Link>
            <Link to ="/login" style={{padding: "5px"}}>Login</Link>
    </nav>
    )
}

export default Navbar;