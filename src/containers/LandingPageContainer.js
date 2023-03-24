import BestSellers from "../components/BestSellers";
import NewProductsSlider from "../components/NewProductsSlider";

const LandingPageContainer = ({products, deleteProduct, addToCart}) => {

    return (
        <div>
            <NewProductsSlider 
            products={products} 
            deleteProduct={deleteProduct}
            addToCart={addToCart}/>

            <BestSellers 
            products={products} 
            deleteProduct={deleteProduct}
            addToCart={addToCart}/>
        </div>
    )
}

export default LandingPageContainer;