import Checkout from "../../components/Checkout/Checkout";
import CartItems from "../../components/CartItems/CartItems";
import { useState,useContext } from "react";
import {CartContext} from "../../context/Cart";
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
      {!isCheckout ? 
      <button onClick={userCart.items.length > 0 ? toggleCheckout: null} className="addToCartBtn"><i class="bi bi-bag"></i> Buy now</button> :
      <button onClick={toggleCheckout} className="cancelBtn"><i class="bi bi-x-lg"></i> Cancel</button>}
      
      {isCheckout ? <Checkout/> : null}
      

    </div>
  )
}

export default Cart
