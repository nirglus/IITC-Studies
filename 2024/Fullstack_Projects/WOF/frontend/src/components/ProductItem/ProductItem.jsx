import { useState ,useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/Cart';

function ProductItem({product}) {
  const [quantity, setQuantity] = useState(1); 
  const {addItemToCart, userCart} = useContext(CartContext)

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    const productID = product.id;
    console.log({userCart});
    const cartID = userCart.id;
    const price = product.price;
    console.log({productID, cartID, price, quantity});
    addItemToCart({productID, cartID, price, quantity});

    // console.log(`Added ${quantity} ${product.title} to the cart`);
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
      <button onClick={handleAddToCart}>Add to cart</button>
   </div>
  )
}

export default ProductItem
