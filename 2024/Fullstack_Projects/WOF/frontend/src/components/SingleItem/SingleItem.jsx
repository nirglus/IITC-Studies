import { useParams } from "react-router-dom";
import { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config/serverConfig";
import { CartContext } from "../../context/Cart";
import placeholderImage from "../../assets/no-image.png";
import loading from "../../assets/loading.gif";
import "./SingleItem.scss";
import AddToCartModal from "../AddToCartModal/AddToCartModal";
import ImageSlider from "../MiniComponents/ImageSlider/ImageSlider";

function SingleItem() {
  let { id: itemID } = useParams();
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart, userCart } = useContext(CartContext);
  // const [imgSrc, setImgSrc] = useState(item.image);
  const [itemImages, setItemImages] = useState(null);
  const dialog = useRef();

  const getItem = async (itemID) => {
    try {
      const singleItem = await axios.get(`${baseURL}/products/${itemID}`);
      setItem(singleItem.data);
      console.log("Got product succesfully");
    } catch (error) {
      console.log(error);
    }
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
    const productID = item.id;
    console.log({ userCart });
    const cartID = userCart.id;
    const price = item.price;
    addItemToCart({ productID, cartID, price, quantity });
    dialog.current.open();
  };

  // const handleImageError = () => {
  //   setImgSrc(placeholderImage);
  // };

  useEffect(() => {
    getItem(itemID);
  }, [itemID]);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  useEffect(() => {
    // if (item.image) {
    //   setImgSrc(item.image);
    // }
    if (item.images && item.images.length > 0) {
      setItemImages(item.images);
    } else if (item.image){
      setItemImages([{
        url: item.image,
        title: 'item-image'
      }]);
    }
  }, [item]);

  return (
    <>
      <AddToCartModal ref={dialog} />
      <div className="singleProduct">
        {itemImages ? (
          <>
            <div className="productImages">
              <ImageSlider slides={itemImages} />

              {/* <img className='mainImg' src={imgSrc} alt={item.title} width={600} onError={handleImageError}/>
                <div className="imagesStack">
                  <img src={imgSrc} alt={item.title} width={200} onError={handleImageError}/>
                  <img src={imgSrc} alt={item.title} width={200} onError={handleImageError}/>
                  <img src={imgSrc} alt={item.title} width={200} onError={handleImageError}/>
                </div> */}
            </div>
            <div className="productDescription">
              <h2>{item.title}</h2>
              <hr />
              <p className="itemDesc">{item.description}</p>
              <div className="productStats">
                <p>
                  <span>Scale: </span>
                  {item.scale}
                </p>
                <p>
                  <span>In stock:</span> {item.totalQuantity}
                </p>
              </div>
              <p className="price">${item.price}</p>
              <div className="quantity">
                <p>Quantity:</p>
                <button className="quantityBtn" onClick={handleDecrement}>
                  -
                </button>
                <span>{quantity}</span>
                <button className="quantityBtn" onClick={handleIncrement}>
                  +
                </button>
              </div>
              <button className="addToCartBtn" onClick={handleAddToCart}>
                <i className="bi bi-cart-plus"></i> Add to cart
              </button>
              <Link to={"/products"} className="backToProducts">
                <i className="bi bi-sign-turn-left-fill"></i> Back to products
              </Link>
            </div>
          </>
        ) : (
          <div className="loading">
            <img src={loading} alt="loading" />
          </div>
        )}
      </div>
    </>
  );
}

export default SingleItem;
