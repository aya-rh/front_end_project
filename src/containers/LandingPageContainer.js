import BestSellers from "../components/BestSellers";
import NewProductsSlider from "../components/NewProductsSlider";

const SERVER_URL = "http://localhost:8080";

const LandingPageContainer = ({products, deleteProduct}) => {

    return (
        <div>
            <NewProductsSlider 
            products={products} 
            deleteProduct={deleteProduct}/>

            <BestSellers 
            products={products} 
            deleteProduct={deleteProduct}/>
        </div>
    )
}

export default LandingPageContainer;