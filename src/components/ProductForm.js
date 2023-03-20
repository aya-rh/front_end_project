import { useState } from "react";

const ProductForm = ({products, onSubmit}) => {
    
    const [addedProduct, setAddedProduct] = useState({
        name: "",
        price: 0, 
        description: "",
        seller: ""
    });

    const handleChange = (event) => {
        const productName = event.target.name;
        const copiedProduct = {...addedProduct};
        copiedProduct[productName] = event.target.value;
        setAddedProduct(copiedProduct);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(addedProduct);
    }

    return (
        <form className="product-form" onSubmit={handleFormSubmit}>
            <h3>Add a New Product</h3>

            <label htmlFor="product-name">Product Name:</label>
            <input id="product-name" name="name" type="text" placeholder="Enter product name" onChange={handleChange}/>

            <label htmlFor="product-price">Product Price:</label>
            <input id="product-price" name="price" type="number" placeholder="Enter product price" onChange={handleChange}/>

            <label htmlFor="product-description">Product Description:</label>
            <input id="product-description" name="description" type="text" placeholder="Enter product description" onChange={handleChange}/>

            <label htmlFor="product-seller">Product Seller:</label>
            <input id="product-seller" name="seller" type="text" placeholder="Enter product seller" onChange={handleChange}/>

            <input type="submit" value="Add Product"/>
        </form>
    )

}

export default ProductForm;