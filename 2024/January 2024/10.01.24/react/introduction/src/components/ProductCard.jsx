function ProductCard(props){
    return(
        <div>
            <p>{props.product.title}</p>
            <p>${props.product.price}</p>
            <img src={props.product.image} width={300} height={200} alt="product"/>
    </div>
    )
}

export default ProductCard;