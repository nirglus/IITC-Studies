import Checkout from "../../components/Checkout/Checkout";
import CartItems from "../../components/CartItems/CartItems";
import { useState } from "react";

function Cart() {
  const [isCheckout, setIsCheckout] = useState(false);
  const toggleCheckout = () =>{
    setIsCheckout(!isCheckout);
  }


  return (
    <div>
      <CartItems/>
      <button onClick={toggleCheckout}>Buy now</button>
      {isCheckout ? <Checkout/> : null}
      

    </div>
  )
}

export default Cart
