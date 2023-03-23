const Product = ({product, deleteProduct}) => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
      const pics = importAll(require.context('../pics', false, /\.(png|jpeg|svg)$/));
    return(
        <div className="product-card">
            <img src={pics[`${product.name}.jpeg`]} alt={product.name}/>
            <h4><strong>Product: </strong>{product.name}</h4>
            <p><strong>Price: £</strong>{product.price}</p>
            <p><strong>Description: </strong>{product.description}</p>
            <p><strong>Seller: </strong>{product.sellerName}</p>
            <button className="add">Add to cart</button>
            <button className="delete" onClick={()=> deleteProduct(product.productId)}>Delete</button>
           
        </div>
    )
}

export default Product;