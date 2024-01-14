function ProductCard(props){
    return(
        <>
        <h1>{props.product.title}</h1>
        <p>${props.product.price}</p>
        <img src={props.product.image} alt={props.product.title} />
        </>
    )
}


export default ProductCard;