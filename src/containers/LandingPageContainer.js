import { useEffect, useState } from "react";
import BestSellers from "../components/BestSellers";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import NewProductsSlider from "../components/NewProductsSlider";

const SERVER_URL = "http://localhost:8080";

const LandingPageContainer = () => {

    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sellers, setSellers] = useState([]);

    const loadProductData = async () => {
        const response = await fetch (`${SERVER_URL}/products`);
        const data = await response.json();
        setProducts(data);
    }

    const loadSellerData  = async () => {
        const response = await fetch (`${SERVER_URL}/sellers`);
        const data = await response.json();
        setSellers(data);
    }

    useEffect(() => {
        loadProductData();
        loadSellerData();
    }, []);


    
    const postProduct = async (addedProduct) => {

        const productBody = {
            name: addedProduct.name,
            price: addedProduct.price,
            description: addedProduct.description,
            stock: 100,
            listed: true
        }

        const id = sellers.filter((seller)=>{
            return seller.name === addedProduct.seller
        })[0].sellerId

        const response = await fetch (`${SERVER_URL}/products?sellerId=${id}`, {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(productBody)
        })
        const savedProduct = await response.json();
        savedProduct.sellerId = id;
        savedProduct.sellerName = addedProduct.seller;
        savedProduct.productId = savedProduct.id;
        setProducts([...products, savedProduct])
    }

    const deleteProduct = async (id) => {
        await fetch (`${SERVER_URL}/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json" 
            }
        });
        loadProductData();
    }

    return (
        <div>
            <ProductForm
            products={products}
            onSubmit={postProduct}/>

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