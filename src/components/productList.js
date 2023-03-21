import Product from "./Product";

const ProductList = ({products, deleteProduct}) => {
    const productComponents = products.map(product => {
        return <Product key={product.productId} product={product}/>
    })
    return(
        <div className="product-list">{productComponents}</div>
    )
}

export default ProductList;