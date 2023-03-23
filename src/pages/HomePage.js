 import Header from "../components/Header";
 import NavBar from "../components/NavBar";
 import DealBanner from "../components/DealBanner";
 import LandingPageContainer from "../containers/LandingPageContainer";
 import SubscribeForm from "../components/SubscribeForm";
 import ExtraInfo from "../components/ExtraInfo";
 import Footer from "../components/Footer";

 

 const Homepage = ({products, postProduct}) => {
    return (
        <>
            <NavBar/>
            <DealBanner/>
            <LandingPageContainer products={products} postProduct={postProduct}/>
            <SubscribeForm/>
            <ExtraInfo/>
        </>
    )

 }

 export default Homepage;