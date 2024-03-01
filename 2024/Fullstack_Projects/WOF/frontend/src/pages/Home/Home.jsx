import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.scss";
import { homeImages } from "../../helpers/images";
import HomeBrands from "../../components/MiniComponents/HomeBrands/HomeBrands";

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
      {/* <div className="home-container">
      <div className="image-slider">
        <img src={homeImages[currentIndex]} alt={`Image ${currentIndex}`} className="current" />
      </div>
        <div className="content-overlay">
          <h1 className="welcome-heading">Welcome to World of Formula!</h1>
          <div className="welcome-description">
            <p>Explore and collect your favorite Formula 1 cars and teams to adorn your collection!</p>
            <p>Immerse yourself in the world of Formula 1, where passion meets craftsmanship, and relive the excitement of iconic races.</p>

          </div>
          <button><Link to="/products">View Products</Link></button>
        </div>
      </div> */}
      <div className="homeContainer">
        <div className="contentOverlay">
          <h1 className="welcomeHeading">Start your engines</h1>
          <div className="welcomeDescription">
            <p>Explore and collect your favorite Formula 1 cars and teams to adorn your collection!</p>
            {/* <p>Immerse yourself in the world of Formula 1, where passion meets craftsmanship, and relive the excitement of iconic races.</p> */}
          </div>
          <button><Link to="/products">View Products</Link></button>
        </div>
      </div>
      <HomeBrands />
    </div>
    );
  }

export default Home
