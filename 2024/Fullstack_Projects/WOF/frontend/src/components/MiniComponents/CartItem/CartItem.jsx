import React from 'react'

function CartItem({item}) {
  return (
    <>
        <h3>{item.productID.title}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${item.price}</p>
    </>
  )
}

export default CartItem
