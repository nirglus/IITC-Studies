import Checkout from "../../components/Checkout/Checkout";
import CartItems from "../../components/CartItems/CartItems";
import { useState,useContext } from "react";
import {CartContext} from "../../context/Cart";
import { Link } from "react-router-dom";
import "./Cart.scss";

function Cart() {
  const [isCheckout, setIsCheckout] = useState(false);
  const {userCart} = useContext(CartContext);
  const toggleCheckout = () =>{
    setIsCheckout(!isCheckout);
    console.log({userCart});
  }


  return (
    <div className="cartPage">
      <CartItems/>
      {userCart.items.length < 1 ? (
       <div className="noItems">
         <h2>Seems like your cart is empty!</h2>
         <button><Link to="/products">Go to products</Link></button>
       </div>) : (
        <>
        {!isCheckout ? 
        <button onClick={toggleCheckout} className="addToCartBtn"><i class="bi bi-bag"></i> Buy now</button> :
        <button onClick={toggleCheckout} className="cancelBtn"><i class="bi bi-x-lg"></i> Cancel</button>}
        
        {isCheckout ? <Checkout/> : null}
        </>
       )}
        

      

    </div>
  )
}

export default Cart
