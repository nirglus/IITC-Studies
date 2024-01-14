import ProductCard from "../components/ProductCard";
import { useState } from "react";

function Products(){
    const [products, setProducts] = useState([
        {
            title: "Ferrari FXX",
            price: 2680000,
            image: "https://www.ultimatecarpage.com/images/mediums/17719.jpg"
        },
        {
            title: "Ferrari Enzo",
            price: 2000000,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Orange_Enzo_Ferrari_%287191948164%29.jpg/420px-Orange_Enzo_Ferrari_%287191948164%29.jpg"
        },
        {
            title: "Ferrari 458",
            price: 450000,
            image: "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/09q4/300860/2010-ferrari-458-italia-photo-307846-s-original.jpg?resize=1200:*"
        }
    ])

    const [product, setProduct] = useState({});
    
    const changeHandler = (e) =>{
        product[e.target.name] = e.target.value;
        setProduct({...product});
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        setProducts([...products, {...product}]);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input onChange={changeHandler} type="text" name="title" />
                <input onChange={changeHandler} type="text" name="price" />
                <input onChange={changeHandler} type="text" name="image" />

                <button type="submit">Add book</button>
            </form>
        {products.map((product, index) =>{
            return <ProductCard product={product} key={index}/>
        })}
        </>
    )
}

export default Products;