import Checkout from "../../components/Checkout/Checkout";
import CartItems from "../../components/CartItems/CartItems";
import { useState } from "react";
import "./Cart.scss";

function Cart() {
  const [isCheckout, setIsCheckout] = useState(false);
  const toggleCheckout = () =>{
    setIsCheckout(!isCheckout);
  }


  return (
    <div className="cartPage">
      <CartItems/>
      {!isCheckout ? 
      <button onClick={toggleCheckout} className="addToCartBtn"><i class="bi bi-bag"></i> Buy now</button> :
      <button onClick={toggleCheckout} className="cancelBtn"><i class="bi bi-x-lg"></i> Cancel</button>}
      
      {isCheckout ? <Checkout/> : null}
      

    </div>
  )
}

export default Cart
