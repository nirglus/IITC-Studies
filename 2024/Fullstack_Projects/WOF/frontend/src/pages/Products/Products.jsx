import axios from 'axios';
import { isAdmin } from '../../config/roles';
import { UserContext } from '../../context/User'
import { baseURL } from '../../config/serverConfig';
import { useState, useEffect, useContext } from 'react'
import ProductItem from '../../components/ProductItem/ProductItem';

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
  }, [products.length])
  return (
    <>
      {products.map((product, index) =>
         product.active ? (
          <div key={index} className="productItem">
            <ProductItem product={product} isAdmin={isAdmin(user)} onDelete={handleDelete} setProducts={setProducts} />
          </div>
          ) : null
      )}
    </>
  );
}

export default Products
