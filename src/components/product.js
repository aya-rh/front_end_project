const Product = ({product, deleteProduct, addToCart}) => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }

      const handleAddToCart = () => {
        addToCart(product);
      };
      
      const pics = importAll(require.context('../pics', false, /\.(png|jpeg|svg)$/));
    return(
        <div className="product-card">
            <img id="image" src={pics[`${product.name}.jpeg`]} alt={product.name}/>
            <h4><strong>Product: </strong>{product.name}</h4>
            <p><strong>Price: £</strong>{product.price}</p>
            <p>{product.description}</p>
            <p><strong>Seller: </strong>{product.sellerName}</p>
            <button className="add" onClick={handleAddToCart}>Add to cart</button>
            <button className="delete" onClick={()=> deleteProduct(product.productId)}>Delete</button>
        </div>
    )
}

export default Product;