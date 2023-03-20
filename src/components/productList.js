import Product from "./product";

const ProductList = ({products}) => {
    const productComponents = products.map(product => {
        return <Product key={product.id} product={product}/>
    })
    return(
        <div className="product-list">{productComponents}</div>
    )
}

export default ProductList;