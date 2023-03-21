import Product from "./Product";

const ProductList = ({products, deleteProduct}) => {
    const productComponents = products.map(product => {
        return <Product key={product.productId} product={product} deleteProduct={deleteProduct}/>
    })
    return(
        <>{productComponents}</>
    )
}

export default ProductList;