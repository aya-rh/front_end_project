 import NavBar from "../components/NavBar";
 import DealBanner from "../components/DealBanner";
 import LandingPageContainer from "../containers/LandingPageContainer";
 import SubscribeForm from "../components/SubscribeForm";
 import ExtraInfo from "../components/ExtraInfo";

 

 const Homepage = ({products, postProduct, deleteProduct}) => {
    return (
        <>
            <NavBar/>
            <DealBanner/>
            <LandingPageContainer products={products} postProduct={postProduct} deleteProduct={deleteProduct}/>
            <SubscribeForm/>
            <ExtraInfo/>
        </>
    )

 }

 export default Homepage;
