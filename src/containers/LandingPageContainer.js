import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const SERVER_URL = "http://localhost:8080";

const LandingPageContainer = () => {

    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const loadProductData = async () => {
        const response = await fetch (`${SERVER_URL}/products`);
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        loadProductData();
    }, []);

    
    const postProduct = async (addedProduct) => {
        const response = await fetch (`${SERVER_URL}/products`, {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(addedProduct)
        })
        const savedProduct = await response.json();
        setProducts([...products, savedProduct])
    }

    const deleteProduct = async (id) => {
        await fetch (`${SERVER_URL}/:${id}`, {
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

            <ProductList 
            products={products} 
            onDelete={deleteProduct}/>
        </div>
    )
}

export default LandingPageContainer;