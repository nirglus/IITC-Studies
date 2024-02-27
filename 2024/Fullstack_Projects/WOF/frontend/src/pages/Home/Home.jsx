import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.scss";
import { homeImages } from "../../helpers/images";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [homeImages.length, currentIndex]);
  

  return (
    // <div>
    //       <h1>Welcome to World of Formula!</h1>
    //       <p>Checkout our formula 1 diecast</p>
    //       <button><Link to="/products">Show me the products</Link></button>
    // </div>
    <div className="home">
      <div className="home-container">
      <div className="image-slider">
        <img src={homeImages[currentIndex]} alt={`Image ${currentIndex}`} className="current" />
      </div>
        <div className="content-overlay">
          <h1 className="welcome-heading">Welcome to World of Formula!</h1>
          <p className="thrills-description">Explore the Thrills of Formula 1 Diecast Collectibles</p>
          <button><Link to="/products">View Products</Link></button>
        </div>
      </div>
    </div>
    );
  }

export default Home
