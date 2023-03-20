const Product = ({product}) => {

    return(
        <div className="product-card">
            <h4><strong>Product: </strong>{product.name}</h4>
            <p><strong>Price: £</strong>{product.price}</p>
            <p><strong>Description: </strong>{product.description}</p>
            <p><strong>Seller: </strong>{product.sellerName}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default Product;