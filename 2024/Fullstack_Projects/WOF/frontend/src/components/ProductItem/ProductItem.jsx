import { useState } from 'react'
import { Link } from 'react-router-dom'

function ProductItem({product}) {
  const [quantity, setQuantity] = useState(1); 

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.title} to the cart`);
  };

  return (
    <div>
      <h2><Link to={`/products/${product.id}`}>{product.title}</Link></h2>
      <p>{product.description}</p>
      <p>{product.scale}</p>
      <p>In stock: {product.totalQuantity}</p>
      <p>${product.price}</p>
      <div>
        <p>Quantity:</p>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button>Add to cart</button>
   </div>
  )
}

export default ProductItem
