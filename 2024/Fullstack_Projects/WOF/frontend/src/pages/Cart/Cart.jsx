import { useState,useContext, useEffect } from "react";
import {CartContext} from "../../context/Cart";
import { useParams } from "react-router-dom";

function Cart() {
  const {userCart} = useContext(CartContext);
  let {id: cartID} = useParams();

  return (
    <div>
      <h1>My Cart</h1>
      <p>{userCart.id}</p>
      <p>{userCart.totalPrice}</p>
    </div>
  )
}

export default Cart
