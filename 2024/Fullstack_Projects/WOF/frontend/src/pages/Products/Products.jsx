import { useState, useEffect } from 'react'
import { baseURL } from '../../config/serverConfig';
import ProductItem from '../../components/ProductItem/ProductItem';
import axios from 'axios';


function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = async () =>{
    try {
      const response = await axios.get(`${baseURL}/products`);
      setProducts(response.data)
      console.log(products);
    } catch (error) {
      console.error("Failed to get products", error);
    }
  }

  useEffect(()=>{
    getProducts();
  }, [])
  return (
    <div>
      {products.map((product, index) =>(
        <ProductItem key={index} product={product} />
      ))}
    </div>
  )
}

export default Products
