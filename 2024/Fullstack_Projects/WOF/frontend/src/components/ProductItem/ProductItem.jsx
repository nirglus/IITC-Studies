import { useState ,useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/Cart';
import { UserContext } from '../../context/User';
import axios from 'axios';
import { baseURL } from '../../config/serverConfig';
import "./ProductItem.scss";


function ProductItem({ product, isAdmin, onDelete, setProducts}) {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart, userCart } = useContext(CartContext);
  const {headers} = useContext(UserContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleEdit = () => {
      setIsEditMode(true);
  };

  const handleSave = async () => {
    try {
        const res = await axios.patch(`${baseURL}/products/${product._id}`,editedProduct , {headers} );
        console.log(`Item updated!`, res.data);
        setIsEditMode(false);
        setProducts(prevProducts => {
            const existingProductIndex = prevProducts.findIndex(product => product.id === res.data.id);
            if (existingProductIndex !== -1) {
                const updatedProducts = [...prevProducts];
                updatedProducts[existingProductIndex] = res.data;
                return updatedProducts;
            }
        });
    } catch (error) {
        console.error('Failed to save product changes', error);
    }
};
  
  const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedProduct((prevProduct) => ({
          ...prevProduct,
          [name]: value,
      }));
  };

  const handleDelete = () => {
      onDelete(product._id);
  };

  const handleIncrement = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
      if (quantity > 1) {
          setQuantity((prevQuantity) => prevQuantity - 1);
      }
  };

  const handleAddToCart = () => {
      const productID = product.id;
      const cartID = userCart.id;
      const price = product.price;
      addItemToCart({ productID, cartID, price, quantity });
  };

  return (
    <div className="product">
    {isEditMode ? (
        <div className='editPreview'>
            <input type="text" name="title" value={editedProduct.title} onChange={handleChange} />
            <input type="text" name="description" value={editedProduct.description} onChange={handleChange} />
            <input type="text" name="scale" value={editedProduct.scale} onChange={handleChange} />
            <input
                type="number"
                name="totalQuantity"
                value={editedProduct.totalQuantity}
                onChange={handleChange}
            />
            <input type="number" name="price" value={editedProduct.price} onChange={handleChange} />
            <button onClick={handleSave}>Save</button>
        </div>
    ) : (
        <div className='productPreview'>
        <img src={product.image} alt={product.title} width={300}/>
        <h2><Link to={`/products/${product.id}`}>{product.title}</Link></h2>
        <p><span>Description: </span>{product.description}</p>
        <p><span>Scale: </span>{product.scale}</p>
        <p><span>In stock:</span> {product.totalQuantity}</p>
        <p className='price'>${product.price}</p>
        <div className='quantity'>
            <p>Quantity:</p>
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
                {isAdmin && (
                    <>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </>
                )}
      </div>
    )}
</div>
  )
}

export default ProductItem
