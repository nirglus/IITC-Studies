import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
          <h1>Welcome to World of Formula!</h1>
          <p>Checkout our formula 1 diecast</p>
          <button><Link to="/products">Show me the products</Link></button>
    </div>
  )
}

export default Home
