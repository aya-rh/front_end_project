import ProductList from "./ProductList";

const BestSellers = ({products, deleteProduct}) => {
    return (
        <div className="products-card">
            <h2>BestSellers:</h2>
            <ProductList 
            key={"bestsellers"}
            products={products} 
            deleteProduct={deleteProduct}/>
        </div>
    )
}
export default BestSellers;