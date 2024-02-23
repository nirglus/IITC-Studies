import CartItem from "../MiniComponents/CartItem.jsx/CartItem";
import { useContext, useEffect } from "react";
import {CartContext} from "../../context/Cart";
import { useParams } from "react-router-dom";

function CartItems() {
  const {userCart, findCartByUserID, setUserCart, removeItemFromCart} = useContext(CartContext);
  let {id: cartID} = useParams();
  
  useEffect(() => {
    findCartByUserID(cartID);
  }, [cartID]);

  if (!userCart || !userCart.items) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Cart</h1>
      {userCart.items.map((item,index)=>(
        <div className='cartItem' key={index}>
        <CartItem item={item} />
        <button onClick={() => removeItemFromCart(userCart.id, item._id)}>Remove from Cart</button>
        </div>
      ))}
      <p><b>Total price: </b>${userCart.totalPrice}</p>
    </div>
  )
}

export default CartItems
