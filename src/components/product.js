const Product = ({product}) => {

    return(
        <div>
            <h4><strong>Product: </strong>{product.name}</h4>
            <p><strong>Price: £</strong>{product.price}</p>
            <p><strong>Description: </strong>{product.description}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default Product;