import Product from "./Product";

const ProductList = ({products, deleteProduct, addToCart}) => {
    const productComponents = products.map(product => {
        return <Product key={product.productId} product={product} deleteProduct={deleteProduct} addToCart={addToCart}/>
    })
    return(
        <>{productComponents}</>
    )
}

export default ProductList;