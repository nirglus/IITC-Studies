import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config/serverConfig";
import { CartContext } from '../../context/Cart';

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
        <div>
        <img src={item.image} alt={item.title} width={600}/>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.scale}</p>
        <p>In stock: {item.totalQuantity}</p>
        <p>${item.price}</p>
        <div>
            <p>Quantity:</p>
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
        </div>
        <Link to={"/products"}>Back to products</Link>
    </>
  )
}

export default SingleItem
