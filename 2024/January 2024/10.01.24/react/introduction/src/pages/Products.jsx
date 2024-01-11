import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Products(){
    const [products, setProducts] = useState([
        {
            title: "Milk",
            price: 5.99,
            image: "https://drinkmilk.co.uk/wp-content/uploads/2020/05/milk_2pint.png"
        },
        {
            title: "Potato",
            price: 7.99,
            image: "https://www.simplyrecipes.com/thmb/B_0tucWmwwBkC2ORPJblvrdVDRU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Potato-Confit-LEAD-1-704d0e14fb424f8d9f3a2ccaccaec8a9.jpg"
        },
        {
            title: "Bread",
            price: 9.99,
            image: "https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Bread-Recipe-5-2.jpg"
        }
    ]
    )
    return ( 
        <div>
            <h1>Products</h1>
            {products.map((product, i) =>{
                return(
                    <ProductCard product={product} key={`pr_${i}`}/>
                )
            })}
        </div>
    )
}


export default Products;