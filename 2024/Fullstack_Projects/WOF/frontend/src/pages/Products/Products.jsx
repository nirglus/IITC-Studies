import axios from 'axios';
import { isAdmin } from '../../config/roles';
import { UserContext } from '../../context/User'
import { baseURL } from '../../config/serverConfig';
import { useState, useEffect, useContext } from 'react'
import ProductItem from '../../components/ProductItem/ProductItem';
import "./Products.scss";


function Products() {
  const [products, setProducts] = useState([]);
  const {user, headers} = useContext(UserContext);
  const getProducts = async () =>{
    try {
      const response = await axios.get(`${baseURL}/products`);
      setProducts(response.data)
      console.log(products);
    } catch (error) {
      console.error("Failed to get products", error);
    }
  }
  const handleDelete = async (productId) => {
    const shouldDelete = window.confirm("Are you sure you want to disable this item?");
    if (shouldDelete) {
      try {
        await axios.patch(`${baseURL}/products`, {
          id: productId,
          active: false
        }, {headers});
        setProducts(products.filter(product => product._id !== productId));
      } catch (error) {
        console.error("Failed to disable product", error);
      }
    }
  };
  useEffect(()=>{
    getProducts();
  }, [products.length]);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='products'>
      <div className="titles">
        <h1>Our Products</h1>
        <hr/>
      </div>
      <div className="productsDisp">
        {products.map((product, index) =>
          product.active ? (
              <ProductItem key={index} product={product} isAdmin={isAdmin(user)} onDelete={handleDelete} setProducts={setProducts} />
            ) : null
        )}
      </div>
    </div>
  );
}

export default Products
