const Product = ({product, deleteProduct}) => {

    return(
        <div className="product-card">
            <h4>{product.name}</h4>
            <p><strong>Price:</strong>£{product.price}</p>
            <p>{product.description}</p>
            <p><strong>Seller: </strong>{product.sellerName}</p>
            <button className="add">Add to cart</button>
            <button className="delete" onClick={()=> deleteProduct(product.productId)}>Delete</button>
        </div>
    )
}

export default Product;