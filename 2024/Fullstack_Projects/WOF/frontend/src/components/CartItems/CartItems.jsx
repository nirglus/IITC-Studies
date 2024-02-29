import CartItem from "../MiniComponents/CartItem/CartItem";
import { useContext, useEffect, useState } from "react";
import {CartContext} from "../../context/Cart";
import { useParams } from "react-router-dom";
import "./CartItems.scss";

function CartItems() {
  const {userCart, findCartByUserID, setUserCart, removeItemFromCart} = useContext(CartContext);
  const [cartTotalPrice, setCartTotalPrice] = useState(userCart.totalPrice);
  let {id: cartID} = useParams();
  
  useEffect(() => {
    findCartByUserID(cartID);
  }, [cartID, userCart.totalPrice]);

  if (!userCart || !userCart.items) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cartItems">
      <h1>My Cart</h1>
      <hr />
      {userCart.items.map((item,index)=>(
        <div className='cartItem' key={index}>
        <CartItem item={item} />
        <button onClick={() => removeItemFromCart(userCart.id, item._id)}><i class="bi bi-trash3"></i> <span className="removeFromCart">Remove from Cart</span></button>
        </div>
      ))}
      <p><b>Total price: </b>${userCart.totalPrice}</p>
    </div>
  )
}

export default CartItems
