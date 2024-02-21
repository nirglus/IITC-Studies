import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem({product}) {
  return (
    <div>
      <h2><Link to={`/products/${product.id}`}>{product.title}</Link></h2>
      <p>{product.description}</p>
      <p>{product.scale}</p>
      <p>In stock: {product.totalQuantity}</p>
      <p>${product.price}</p>
      <button>Add to cart</button>
  </div>
  )
}

export default ProductItem
