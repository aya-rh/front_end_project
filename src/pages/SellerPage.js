import ProductForm from "../components/ProductForm";

const SellerPage = ({products, postProduct}) => {
return (
    <>
    <h1>Sellers</h1>
    <ProductForm
    products={products}
    onSubmit={postProduct}/>
    </>
)
}

export default SellerPage;