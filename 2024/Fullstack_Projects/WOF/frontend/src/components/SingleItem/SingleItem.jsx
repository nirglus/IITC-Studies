import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config/serverConfig";
import { CartContext } from '../../context/Cart';
import "./SingleItem.scss";

function SingleItem() {
  let {id: itemID} = useParams();
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1); 
  const {addItemToCart, userCart} = useContext(CartContext);

  const getItem = async(itemID) =>{
      try {
          const singleItem = await axios.get(`${baseURL}/products/${itemID}`);
          setItem(singleItem.data);
          console.log("Got product succesfully");
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleIncrement = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
      }
    };
  
    const handleAddToCart = () => {
      const productID = item.id;
      console.log({userCart});
      const cartID = userCart.id;
      const price = item.price;
      console.log({productID, cartID, price, quantity});
      addItemToCart({productID, cartID, price, quantity});
    };
    
    useEffect(() =>{
        getItem(itemID);
    }, [itemID]);

  return (
      <>
        <div className="singleProduct">
          <div className="productImages">
            <img className='mainImg' src={item.image} alt={item.title} width={600}/>
            <div className="imagesStack">
              <img src={item.image} alt={item.title} width={200}/>
              <img src={item.image} alt={item.title} width={200}/>
              <img src={item.image} alt={item.title} width={200}/>
            </div>

          </div>
          <div className="productDescription">
            <h2>{item.title}</h2>
            <hr />
              <p className="itemDesc">Feel the thrill of the Formula One championship with this detailed diecast model car, a precise replica of George Russell’s 2023 winning ride. Invite the exhilarating world of racing into your life today!</p>
            <div className="productStats">
              <p><span>Scale: </span>{item.scale}</p>
              <p><span>In stock:</span> {item.totalQuantity}</p>
            </div>
            <p className="price">${item.price}</p>
            <div className="quantity">
                <p>Quantity:</p>
                <button className='quantityBtn' onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button className='quantityBtn' onClick={handleIncrement}>+</button>
            </div>
            <button className="addToCartBtn" onClick={handleAddToCart}><i class="bi bi-cart-plus"></i> Add to cart</button>
            <Link to={"/products"}><i class="bi bi-sign-turn-left-fill"></i> Back to products</Link>
          </div>
        </div>
    </>
  )
}

export default SingleItem
